let db = require('../lib/db')

module.exports = function () {
    return {
        getTodoById: function (todo_id) {
            let sql = `SELECT * FROM TODO WHERE ?`;
            let args = {
                todo_id
            }
            try {
                db.getConnection();
                console.log('일단 여기...')
                return db.query(sql, args).catch(err => err);
            } finally {
                console.log('db close')
                db.close();
            }
        }
    }
}();