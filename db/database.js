const sqlite3 = require('sqlite3').verbose();


const queryDB = (sql) => {

    //console.log('db open');
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database('./db/flashcardsdb.db');
        db.all(sql, (err, row) => {
            //console.log(row);
            resolve(row);
        });
    });
    //res.json(rows);//console.log('done');
};


module.exports = queryDB;