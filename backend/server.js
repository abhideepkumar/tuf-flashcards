//craete an express server
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});

const db=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'flashcards',
});

app.get('/cards', (req, res) => {
    db.query('SELECT * FROM cards', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})