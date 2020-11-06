const express = require('express');
const app = express();

const queryDB = require('./db/database')

const PORT = process.env.PORT || 8000;




app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/api/words', (req, res) => {
    const sql1 = `SELECT * FROM words`;
    queryDB(sql1).then(r => res.send(r));
});


app.listen(PORT, () => console.log(`Server open on port ${PORT}`));