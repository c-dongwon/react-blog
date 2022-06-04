const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const mysql = require("mysql");
app.use(express.json());

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "dong6938!",
    database: "dwbase",
  });

const bcrypt = require("bcrypt")
const saltRounds = 10

  app.get("/", (req, res) => {
    res.send('success!')
  });

  app.get('/api/list', (req, res) => {
    db.query("SELECT * FROM blog_post", (err, data) => {
        if (err) {
            console.log('err');
            res.send(err);
        } else{
            console.log('success');
            res.send(data);
        }
    });
});

app.post("/api/signup", (req, res) => {
  const param = [req.body.name, req.body.email, req.body.password]
  bcrypt.hash(param[2], saltRounds, (error, hash) => {
    param[2] = hash
    db.query('INSERT INTO user( name, email, password) VALUES(?,?,?)', param, (err, row) => {
      if(err) console.log(err)
    })
  })
  res.end()
})

app.post("/api/login", (req, res) => {
  const param = [req.body.email, req.body.password]
  db.query('SELECT * FROM user WHERE email=?',param[0],(err, row) =>{
    if(err) console.log(err)

    if(row.length > 0){
      bcrypt.compare(param[1],row[0].password,(error, result) => {
        if(result){
          return res.send(result)
        }else{
          return res.status(404).send("비밀번호가 틀렸습니다!")
        }
      })
    }else{
      return res.status(404).send("id가 존재하지 않습니다!")
    }
  })
  res.end()
})

  app.listen(PORT, () => {
    console.log(`Connect at http://localhost: ${PORT}`);
  });