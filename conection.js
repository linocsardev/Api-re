const mysql = require("mysql2");
const dotenv = require("dotenv")
dotenv.config()


const conection = mysql.createConnection({
    host:process.env.DBHOST,
    user:process.env.DBUSER,
    password:process.env.DBPASS,
    database:process.env.DBNAME,
  
})

conection.connect((error, msg)=>{
    if(error){
        throw error
    } else {
        console.log("Se conecto satisfacctoriamente")
    }
})



module.exports=  conection;