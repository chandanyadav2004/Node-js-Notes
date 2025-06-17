const express = require('express');
const app = express();

const path = require('path');

const userModel = require('./models/users');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")));

app.get('/', (req,res)=>{
    res.render("index");
})

app.get('/read',async (req,res)=>{
    let allUser = await userModel.find()
    res.render("read",{users: allUser});
})

app.get('/edit/:id',async (req,res)=>{
    let user = await userModel.findOne({_id : req.params.id});
    res.render("edit",{user})
    
})

app.post('/update/:id',async (req,res)=>{
    let {name, email,  image} = req.body;
    let user = await userModel.findOneAndUpdate({_id : req.params.id},{image,email,name}, {new : true});
    res.redirect("/read");
    
})

app.get('/delete/:id',async (req,res)=>{
    let allUser = await userModel.findOneAndDelete({_id : req.params.id})
    res.redirect("/read");
})

app.post('/create',async (req,res)=>{
    let {name, email,  image} = req.body;
    let createdUser = await userModel.create({
        name,
        email,
        image
    });

    res.redirect('/read');
    console.log(createdUser);

})




app.listen(3000);