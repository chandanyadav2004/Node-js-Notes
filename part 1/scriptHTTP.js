// HTTP and HTTPs diff 
// protocol means rules 
// 

const http = require('http');

const server = http.createServer(function(req,res){
    res.end("hello world");

})

server.listen(3000);