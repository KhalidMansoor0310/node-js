const express = require('express');
const app = express();
const mongoose  = require('mongoose');

app.use(express.json());
app.use('/api/product', require('./routes/product'));


mongoose.connect('mongodb+srv://khalidMansoor:khalidkhan123@cluster0.tinyo.mongodb.net/e-comm?retryWrites=true&w=majority',()=>{
    console.log('connected to mongodb');
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);
