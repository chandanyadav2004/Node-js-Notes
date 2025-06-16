const express = require('express');
const app = express();

const userModel = require('./usermodel');
const usermodel = require('./usermodel');

app.get('/', (req,res)=>{
    res.send("hey")
} )

app.get('/create',async (req,res)=>{
   let createuser = await userModel.create({
        name: "Chandani",
        username : "Chandani Yadav",
        email : "Chandani@xyx.com"
    })

    res.send(createuser);
    // console.log("hey");
} )

app.get('/delete',async (req,res)=>{
   let user = await userModel.findOneAndDelete({username : "Chandani Yadav"});

    res.send(user);
    // console.log("hey");
} )

app.get('/update',async (req,res)=>{
   let updateduser = await userModel.findOneAndUpdate(
    {username: "Chandan Yadav"},
    {
        name: "Chandan Yadav @ 123"
    },
    { new : true}
    )

    res.send(updateduser);
    // console.log("hey");
} )

app.get('/read',async (req,res)=>{
   let user = await userModel.find();

    res.send(user);
    // console.log("hey");
} )





app.listen(3000);