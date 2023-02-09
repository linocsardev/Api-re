const {pool} = require("../../conection.js")

model = {}

model.list =   async ()=> {
    let sql = `SELECT * FROM persona`
    let [data] = await pool.query(sql)

    return [data]
}
model.create = async(params) => {
    let values =  [params.idPersona, 
        params.dniPersona, 
        params.nombresPersona, 
        params.apellidosPersona, 
        params.edadPersona, 
        params.sexoPersona,
        params.celularPersona,
        params.correoPersona
    ]
    let result = await pool.query('INSERT INTO persona VALUES (?,?,?,?,?,?,?,?)', values)
    console.log(result)
    return result;
}

module.exports = model;