const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

app.use(cookieParser());

app.get("/", function (req,res){
    res.cookie("name","harsh");
    res.send("done");
})

app.get("/read", function (req,res){
    console.log(req.cookies)
    res.send("read");
})

app.listen(3000);