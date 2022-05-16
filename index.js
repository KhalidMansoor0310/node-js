const express = require('express');
const app = express();
const path = require('path');


const publicPath = path.join(__dirname,'public');
// app.use(express.static(publicPath));


app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`);
})

app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`);
})

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/PageNotFound.html`);
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
}
);
