let mysql = require('mysql');
let config = require('../config/dbConfig')
let db;
module.exports = function () {
    return {
        getConnection: function () {
            db = mysql.createConnection(config);
            db.connect(err => {
                if (err) {
                    console.err('connection err : ' + err);
                } else {
                    console.info('mysql is connected!')
                }
            });
            return db;
        },
        query: (sql, args) => {
            return new Promise((resolve, reject) => {
                db.query(sql, args, (err, rows) => {
                    if (err) {
                        console.log('err  : ', err);
                        return reject({
                            status: 'err',
                            data: err
                        });
                    }
                    console.log('sql  : ', sql);
                    console.log('agrs : ', args);
                    console.log('rows : ', rows);
                    resolve({
                        status: 'ok',
                        data: rows
                    });
                });
            })
        },
        close: function () {
            db.end();
        }
    }
}();