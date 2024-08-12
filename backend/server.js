require('dotenv').config(); 

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json()); 

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
    res.send('Server Responding');
});

app.get('/cards', (req, res) => {
    db.query('SELECT * FROM cards', (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database query error');
        } else {
            res.send(result);
        }
    });
});

app.put('/edit', (req, res) => {
    const { cardID, question, answer } = req.body;
    console.log(cardID, question, answer);
    db.query('UPDATE cards SET question = ?, answer = ? WHERE cardID = ?', [question, answer, cardID], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database update error');
        } else {
            res.send(result);
        }
    });
});

app.delete('/delete', (req, res) => {
    const { cardID } = req.body; 
    console.log('Deleting card with ID:', cardID);
    db.query('DELETE FROM cards WHERE cardID = ?', [cardID], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database delete error');
        } else {
            res.send(result);
        }
    });
});

app.post('/add', (req, res) => {
    const { question,answer } = req.body; 
    console.log('Data:', question,answer);
    db.query('INSERT INTO cards (question, answer) VALUES (?,?)', [question,answer], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send('Database insert error');
        } else {
            res.send(result);
        }
    });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
