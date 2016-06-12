// Hello World Web-Server
'use strict';

var http = require('http');
var PORT = 9999;

http
    .createServer((req,res)=>{
        res.end('<h1>Hello World</h1>');
})
    .listen(PORT,()=>{
        console.log('Server running on PORT:',PORT);
});