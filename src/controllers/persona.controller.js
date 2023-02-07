const personaMdl = require("../models/persona.models")

model = {}

model.list =   async (req, res)=>{
    try {
        
      let data = await personaMdl.list()
      res.json({
        state: "success",
        result: data
      })
      console.log(data)
    } catch (error) {
        res.json({
            state: "failure",
            msg: "Ocurrio un error",
            error: error
        })
        console.log(error)
    }
}
module.exports = model;