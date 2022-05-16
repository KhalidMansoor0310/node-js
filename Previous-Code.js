// How to create a server and Header to server as a response 

const http = require('http');


http.createServer(function(req,res){
    // if someone wants to use response as an html then use http header 
    // to tell the browser that the response is html
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Wellcome to Node JS");
    res.end();
}).listen(3000);
