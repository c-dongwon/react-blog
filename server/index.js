const express = require('express')
const app = express()
const port = 4000
const cookieParser = require('cookie-parser');
const config = require('./config/key')
const { User } = require('./models/User');
const { Board } = require('./models/Board');
const mongoose = require('mongoose')
const multer = require('multer');
const {auth} = require('./middleware/auth') 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

mongoose.connect(config.mongoURI)


.then((res) => console.log("ok!"))
.catch((error) => console.log(error))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const newFileName = file.originalname;
    cb(null, newFileName);
  }
});
const upload = multer({ storage: storage });

app.post('/api/signup', upload.single('file'), (req, res) =>{
  const url = req.protocol + '://' + req.get('host')
  let fileItme = null;

    if(req.file){
      fileItme = url + '/uploads/' + req.file.filename 
    }

    const user = new User({
      name:req.body.name,
      email:req.body.email,
      password:req.body.password,
      file:fileItme
    });
   
    User.findOne({email: req.body.email},(err, id) => {
      if(id){
        return res.status(404).json({success:false,message:"중복된 아이디 입니다."});
      }else if(req.body.password.length < 5){
        return res.status(404).json({success:false,message:"비밀번호는 5글자 이상입니다."});
      }else{
        user.save((err, userInfo) =>{
          if(err) return res.status(404).json({success:false,err});
          return res.status(200).json({
              success:true
          })
      });
      }
    })
    
})

app.post('/api/modfiy', auth, upload.single('file'), (req, res) =>{
  const url = req.protocol + '://' + req.get('host');
  let fileItme = req.user.file
    
    if(req.file){
      fileItme = url + '/uploads/' + req.file.filename 
    }

  User.findOneAndUpdate({_id: req.user._id },
      { name:req.body.name, file:fileItme},{ new: true }
      , (err, user) => {
        if (err) return res.json({ success: false, err });

        return res.status(200).send({
          success: true
        })
      })
})
  
app.post('/api/login', (req, res) => {
    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({email: req.body.email},(err, user) => {
        if(!user){
            return res.status(404).json({
                loginSuccess: false,
                message:"이메일이 존재하지 않습니다."
            });
        };

        //요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인
        user.comparePassword(req.body.password, (err, isMatch) =>{
            if(!isMatch){
                return res.status(404).json({loginSuccess:false,message:"비밀번호가 틀렸습니다."});
            };
            //비밀번호가 일치하다면 token생성
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
        
                // 토큰을 저장.
                res.cookie("x_auth", user.token)
                  .status(200)
                  .json({ loginSuccess: true, userId: user._id, userName:user.name })
              })
        })
    })
})

app.get('/api/user/auth', auth, (req, res) =>{
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        file: req.user.file
      })
})

app.get('/api/logout', auth, (req, res) =>{
    User.findOneAndUpdate({ _id: req.user._id },
        { token: "" }
        , (err, user) => {
          if (err) return res.json({ success: false, err });
          return res.status(200).send({
            success: true
          })
        })
})

app.post('/api/board/:id', (req, res) =>{
    const board = new Board({
      title:req.body.title,
      category:req.params.id,
      content:req.body.content,
      createdAt:req.body.createdAt
    });
   
     
        board.save((err, userInfo) =>{
          if(err) return res.status(404).json({success:false,err});
          return res.status(200).json({
              success:true
          })
      });
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})