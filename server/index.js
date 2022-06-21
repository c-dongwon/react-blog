const express = require('express')
const app = express()
const port = 4000
const cookieParser = require('cookie-parser');
const config = require('./config/key')
const { User } = require('./models/User');
const mongoose = require('mongoose')
const {auth} = require('./middleware/auth') 
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(config.mongoURI)


.then((res) => console.log("ok!"))
.catch((error) => console.log(error))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/signup', (req, res) =>{
    const user = new User(req.body);
    user.save((err, userInfo) =>{
        if(err) return res.json({success:false, err});
        return res.status(200).json({
            success:true
        })
    });
})


app.post('/api/login', (req, res) => {
    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({email: req.body.email},(err, user) => {
        if(!user){
            return res.json({
                loginSuccess: false,
                message:"이메일이 존재하지 않습니다."
            });
        };

        //요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인
        user.comparePassword(req.body.password, (err, isMatch) =>{
            if(!isMatch){
                return res.json({loginSuccess:false,message:"비밀번호가 틀렸습니다."});
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
        image: req.user.image
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

  app.get("/api/modfiy", (req, res) => {
    User.findOne(
      {
        name: "나얌",
      },
      (err, item) => {
        if (err) throw err;
        item.updateOne(
          {
            name: "111",
          },
          (err) => {
            if (err) throw err;
            console.log("Update Success!");
            res.send("Update Success!");
          }
        );
      }
    );
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})