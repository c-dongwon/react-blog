const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req,res) => {
    res.send("서버접속 성공!")
});

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}/`)
})