const mysql = require('mysql');

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_mysql'
});


conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to database');
    }
});

module.exports = conn;







