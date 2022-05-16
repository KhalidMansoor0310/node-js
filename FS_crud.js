const fs = require('fs');
const path = require('path');
const http = require('http');
const pathToPublic = path.join(__dirname, 'public');
http.createServer(function (req, res) {
    // fs.readFile(`${pathToPublic}/file.txt`, function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();
    // });

    // fs.writeFile(`${pathToPublic}/file.txt`, 'Hello World', function (err) {
    //     if (err) throw err;
    //     console.log('File saved!');
    // })

    // fs.appendFile(`${pathToPublic}/file.txt`, 'Wellcome to core module FileSystem', function (err) {
    //     if (err) throw err;
    //     console.log('File saved!');
    // })

    // fs.unlink(`${pathToPublic}/file.txt`, function (err) {
    //     if (err) throw err;
    //     console.log('File deleted!');
    // })
    
}).listen(8080);