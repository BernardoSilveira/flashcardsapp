const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/flashcardsdb.db');
const queryDB = (sql) => {

    //console.log('db open');
    return new Promise((resolve, reject) => {
        db.all(sql, (err, row) => {
            //console.log(row);
            resolve(row);
        });
    });
    //res.json(rows);//console.log('done');
};

const addWordDB = (czechWord, englishWord) => {
    sql = "INSERT INTO words(czech_word, english_word) VALUES (?,?)"
    console.log(czechWord, englishWord);
    db.run(sql, [czechWord, englishWord], (err) => {
        if (err)
            return console.log(err.message)
    });
};


module.exports = {
    queryDB,
    addWordDB
}
