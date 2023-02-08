const con  = require("mysql2/promise");
const dotenv = require("dotenv")
dotenv.config()


 const pool = con.createPool({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    password:process.env.DBPASS,
    database:process.env.DBNAME,
})
module.exports = {pool};