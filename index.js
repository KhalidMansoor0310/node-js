const express = require('express');
const app = express();
const conn = require('./config');

app.use(express.json())
app.get('/', (req, res) => {
    conn.query('SELECT * FROM products', (err, result) => {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
        }
    });
});

app.post('/newProduct',(req,res)=>{

        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const category = req.body.category;
        const brand = req.body.brand;
        const sql  = `INSERT INTO products (name, price, description, category, brand) 
        VALUES ('${name}', '${price}', '${description}', '${category}', '${brand}')`;
        conn.query(sql, (err, result) => {
            if (!err) {
                res.send(result);
            } else {
                console.log(err);
            }
        });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});








// the below connection is for mongodb database connection 

// const express = require('express');
// const app = express();
// const mongoose  = require('mongoose');

// app.use(express.json());
// app.use('/api/product', require('./routes/product'));


// mongoose.connect('mongodb+srv://khalidMansoor:khalidkhan123@cluster0.tinyo.mongodb.net/e-comm?retryWrites=true&w=majority',()=>{
//     console.log('connected to mongodb');
// });
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//     }
// );
