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
  db.query('INSERT INTO user( name, email, password) VALUES(?,?,?)', param, (err, row) => {
    if(err) console.log(err)
  })
  res.end()
})


  app.listen(PORT, () => {
    console.log(`Connect at http://localhost: ${PORT}`);
  });