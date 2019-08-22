const express = require('express');
const router = express.Router();
let config = require('../config/dbConfig.js')
let db = require('../lib/db')

router.get('/api/hello', async function (req, res) {
    let sql = `SELECT * FROM TODO WHERE ?`;
    let args = {
        todo_id: '12'
    }
    let result;
    try {
        result = await query(sql, args);
    } catch (err) {
        console.log(err)
    }
    res.send(result)
})


query = (sql, args) => {
    return new Promise((resolve, reject) => {
        db.query(sql, args, (err, rows) => {
            console.log()
            if (err) {
                console.log('err  : ', err);
                return reject(err);
            }
            console.log('sql  : ', sql);
            console.log('agrs : ', args);
            console.log('rows : ', rows);
            resolve(rows);
        });
    })
}
module.exports = router;
//https://supdev.tistory.com/46