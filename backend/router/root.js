const express = require('express');
const router = express.Router();
let config = require('../config/dbConfig.js')
let db = require('../lib/db')

router.get('/api/hello', async function (req, res) {
    let a = await new Promise((resolve, reject) => {
        db.query(`SELECT 'x' FROM dual`, {}, (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    })
    console.log('dddddddddddddd', a)
    res.send('asd')
})

module.exports = router;