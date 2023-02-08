const {pool} = require("../../conection.js")

model = {}

model.list =   async ()=> {
    let sql = `SELECT * FROM persona`
   
   let data = await pool.query(sql)
   console.log(data)
    return data
}
model.create = async() => {
    let {idPersona, 
        dniPersona, 
        nombresPersona, 
        apellidosPersona, 
        edadPersona, 
        sexoPersona,
        celularPersona,
        correoPersona
    } = req.body
    pool.query('INSERT INTO persona VALUES (?,?,?,?,?,?,?,?)',[idPersona, dniPersona, nombresPersona, apellidosPersona, edadPersona, sexoPersona, celularPersona, correoPersona])

}

module.exports = model;