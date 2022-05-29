const mysql = require('mysql');

const db = mysql.createPool({
    host : 'localhost',
    user : 'react_test',
    password: "dong6938!",
    database: "dwbase",
});

module.exports = db;