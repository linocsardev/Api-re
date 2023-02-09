const personaMdl = require("../models/persona.models")

model = {}

model.list =   async (req, res)=>{
    try {

      let result =await personaMdl.list()
      console.log(result)
      res.json({
        state: "success",
        data: result
      })

    } catch (error) {
        res.json({
            state: "failure",
            msg: "Ocurrio un error",
            error: error
        })
    }
}
model.create = async (req, res)=>{
    try {
        
        let params = req.body
        let result = await personaMdl.create(params)
 

        res.json({
            msg: "SE creó un anueva persona",
            data:result
        })
    } catch (error) {
        console.log("HUBO UN ERROR :(", error)
    }
}
module.exports = model;