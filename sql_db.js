const sql = require("mysql2/promise")

const mySqlpool = sql.createPool({
    host:'localhost',
    user:'root',
    password:'HELLOMYSQL@07',
    database:'practice2'
})

module.exports = mySqlpool;