const express = require('express');
const PORT = process.env.PORT || 4000;
const app = express();
const mysql = require("mysql");

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

  app.listen(PORT, () => {
    console.log(`Connect at http://localhost: ${PORT}`);
  });