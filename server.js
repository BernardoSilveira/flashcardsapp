const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const jsonBodyParser = bodyParser.json();

const {queryDB, addWordDB} = require('./db/database')
//const addWordDB = require('./db/database');

const PORT = process.env.PORT || 8000;





app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/api/words/load', (req, res) => {
    const sql1 = `SELECT * FROM words`;
    queryDB(sql1).then(r => res.send(r));
});

app.post('/api/words/add', jsonBodyParser, (req, res) => {
    res.send("BLAAAHHH");
    addWordDB(req.body.czech_word, req.body.english_word)
    //console.log(req.body.czech_word);
});


app.listen(PORT, () => console.log(`Server open on port ${PORT}`));