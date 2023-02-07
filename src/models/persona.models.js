const connection = require("../../conection")

model = {}

model.list =  ()=> {
    let sql = `SELECT * FROM persona`
   connection.query(sql,(error, result )=>{
      if(error) throw error;
      
      return result  
   })
   
    
}

module.exports = model;