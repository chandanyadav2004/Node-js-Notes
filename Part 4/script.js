// form handling and working wiith the  forms
// handle backend process of forms and make sure the data coming from any frontend lib , framework, templating engines, we still handle it backend 

// npm i cookie-parser must be installed 
// session cookie 
const express = require('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));





// middle ware ke 2 ways hai lagane ke
// 
app.use(function(req,res,next){
    console.log("Middleware chaloa ");
    next(); //request age forward kar do 
}); 
 //jitne  bhi request aaya is server par aap.use chala dena every time jitne bhi bhar aaya ye requests

 app.use(function(req,res,next){
    console.log("Middleware chaloa ek aur ba ");
    next(); //request age forward kar do 
}); 



// Root route
app.get('/', (req, res) => {
  res.send('Hello World campoins');
});

// Profile route
app.get('/profile', (req, res,next) => {
  return next(new Error("Something went wrong "));
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// error handler 
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.status(500).send('Something broke');

})


// to automatic restart the server install this pacakege
// npm i nodemon -g
// to run it use command
// nodemon fileName
// if still not run then use this cms
// npx nodemon fileName

