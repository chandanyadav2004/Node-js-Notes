// const fs=require('fs');


// Write file 


// fs.writeFile("hey.txt","Hello kaise ho app", function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done Writig ");
//     }
// })


// Append  file 

// fs.appendFile("hey.txt"," Mei thik hu app apna bataya ", function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done Writig 12");
//     }
// })


// Rename  file 

// fs.rename("hello.pdf","hello.txt",function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done rename ");
//     }

// })

// fs.copyFile("hello.txt","./copy/copyHello.txt",function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("done copy ");
//     }

// })

// ulink is like a  delete of file 

// fs.unlink("./copy/copyHello.txt",function (err){
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("done Unlink ");
//     }

// })

// rmdir is remove directory or floder when it blank or empty floder 
// only empty floder delete permission is given  

// fs.rmdir("./copy",function (err){
//     if(err){
//         console.log(err.message);
//     }
//     else{
//         console.log("done remove  ");
//     }

// })

// read file 

// let content = fs.readFileSync("hello.txt",function (err){
//     if(err){
//         console.log(err);
//     }
//     else{
        
//         console.log("done reading ");
//     }

// })

// console.log(content.toString());