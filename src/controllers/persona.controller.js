const personaMdl = require("../models/persona.models")

model = {}

model.list =   (req, res)=>{
    try {
      
      let data = personaMdl.list()
      res.json({
        state: "success",
        result: data
      })

    } catch (error) {
        res.json({
            state: "failure",
            msg: "Ocurrio un error",
            error: error
        })
        console.log(error)
    }
}
model.create = (req, res)=>{
    try {
    
        console.log(data)
        res.send("SE creó un anueva persona")
    } catch (error) {
        console.log("HUBO UN ERROR :(")
    }
}
module.exports = model;