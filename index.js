const http = require('http');


http.createServer(function(req,res){
    res.write("Wellcome to Node JS");
    res.end();
}).listen(3000);

