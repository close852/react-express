let mysql = require('mysql');
let config = require('../config/dbConfig')
let db = mysql.createConnection(config);
db.connect();
module.exports = db;