const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const config = require('./config/key');
const {User} = require('./models/User');
const {Board} = require('./models/Board');
const {Category} = require('./models/Category');
const {Chat} = require('./models/Chat');
const {Comment} = require('./models/Comment');
const {auth} = require('./middleware/auth')
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");
const app = express()
const port = 4000

app.use(cors());
app.use(express.urlencoded({limit: '100mb', extended: false}));
app.use(express.json({limit: '100mb'}));
app.use(cookieParser());
app.use('/uploads', express.static('uploads'));

mongoose.connect(config.mongoURI)

    .then((res) => console.log("ok!"))
    .catch((error) => console.log(error))


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const newFileName = file.originalname;
        cb(null, newFileName);
    }
});
const upload = multer({storage: storage});

const server = http.createServer(app);

const io = socketIO(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["*"],
        credentials: true,
    },
});
io.on("connection", (socket) => {
    // join : 채팅 참여 이벤트
    socket.on("join", ({roomName: room, userName: user}) => {
        socket.join(room);
        socket.on("onSend", (messageItem) => {
            io.to(room).emit("onReceive", messageItem);
            const chat = new Chat({
                msg: messageItem.msg,
                timeStamp: messageItem.timeStamp,
                userId: messageItem.userId,
                userName: messageItem.userName,
                file: messageItem.file
            });
            chat.save((err, data) => {
                if (err) {
                    console.log(err)
                }
            });
        });
    });
});
app.get('/api/chatlist', async (req, res) => {
    try {
        const chatList = await Chat.find();
        res.json(chatList);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})
app.post('/api/signup', upload.single('file'), (req, res) => {
    const url = req.protocol + '://' + req.get('host')
    let fileItme = null;

    if (req.file) {
        fileItme = url + '/uploads/' + req.file.filename
    }

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        file: fileItme
    });

    User.findOne({email: req.body.email}, (err, id) => {
        if (id) {
            return res.status(404).json({success: false, message: "중복된 아이디 입니다."});
        } else if (req.body.password.length < 5) {
            return res.status(404).json({success: false, message: "비밀번호는 5글자 이상입니다."});
        } else {
            user.save((err, userInfo) => {
                if (err) return res.status(404).json({success: false, err});
                return res.status(200).json({
                    success: true
                })
            });
        }
    })

})

app.post('/api/modfiy', auth, upload.single('file'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    let fileItme = req.user.file

    if (req.file) {
        fileItme = url + '/uploads/' + req.file.filename
    }

    User.findOneAndUpdate({_id: req.user._id},
        {name: req.body.name, file: fileItme}, {new: true}
        , (err, user) => {
            if (err) return res.json({success: false, err});

            return res.status(200).send({
                success: true
            })
        })
})

app.post('/api/login', (req, res) => {
    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({email: req.body.email}, (err, user) => {
        if (!user) {
            return res.status(404).json({
                loginSuccess: false,
                message: "이메일이 존재하지 않습니다."
            });
        }
        ;

        //요청된 이메일이 데이터베이스에 있다면 비밀번호가 일치하는지 확인
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) {
                return res.status(404).json({loginSuccess: false, message: "비밀번호가 틀렸습니다."});
            }
            ;
            //비밀번호가 일치하다면 token생성
            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);

                // 토큰을 저장.
                res.cookie("x_auth", user.token)
                    .status(200)
                    .json({loginSuccess: true, userId: user._id, userName: user.name})
            })
        })
    })
})

app.get('/api/user/auth', auth, (req, res) => {
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

app.get('/api/logout', auth, (req, res) => {
    User.findOneAndUpdate({_id: req.user._id},
        {token: ""}
        , (err, user) => {
            if (err) return res.json({success: false, err});
            return res.status(200).send({
                success: true
            })
        })
})

app.post('/api/board/category', (req, res) => {
    const category = new Category({
        category: req.body.category,
    });

    category.save((err, userInfo) => {
        if (err) return res.status(404).json({success: false, err});
        return res.status(200).json({
            success: true
        })
    });
})

app.get('/api/board/category', async (req, res) => {
    try {
        const accounts = await Category.find();
        res.json(accounts);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.post('/api/board', (req, res) => {
    const board = new Board({
        title: req.body.title,
        category: req.body.category,
        content: req.body.content,
        createdAt: req.body.createdAt
    });

    board.save((err, userInfo) => {
        if (err) return res.status(404).json({success: false, err});
        return res.status(200).json({
            success: true
        })
    });
})

app.get('/api/view/:id', (req, res) => {
    Board.findOne({id: req.params.id}, (err, data) => {
        return res.status(200).send({
            data
        })
    })
})

app.get('/api/board/list', async (req, res) => {
    try {
        const accounts = await Board.find();
        res.json(accounts);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.post('/api/board/comment', (req, res) => {
    const comment = new Comment({
        idx: req.body.idx,
        name: req.body.name,
        content: req.body.content,
        file: req.body.file,
        email: req.body.email
    });

    comment.save((err, userInfo) => {
        if (err) return res.status(404).json({success: false, err});
        return res.status(200).json({
            success: true
        })
    });
})

app.get('/api/board/comment/:id', async (req, res) => {
    try {
        const accounts = await Comment.find({idx: req.params.id});
        res.json(accounts);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})

app.delete('/api/board/comment/:id', (req, res) => {
    Comment.remove({id: req.params.id})
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            console.error(err);
        })
})

app.get('/api/search/:text', async (req, res) => {
    try {
        const accounts = await Board.find({title: {$regex:req.params.text}});
        res.json(accounts);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
})
server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})