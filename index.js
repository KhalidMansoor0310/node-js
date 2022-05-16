const express = require('express');

const app = express();
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './public/uploads/')
        },

        filename: function (req, file, cb) {
            cb(null, file.originalname)
        },
        limits: {
            fileSize: 1024 * 1024 * 5
        }
    }),
}).single('file');

app.post('/upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file."+err.message);
        }
        res.end("File is uploaded");
    });
});



app.listen(3000, () => {
    console.log('listening on port 3000');
    }
);
