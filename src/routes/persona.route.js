const {Router} = require("express")
const { pool } = require("../../conection.js")
const router = Router()

const PersonaCrl = require("../controllers/persona.controller")

router.get("/ping", async (req, res)=>{
    let sql = "SELECT * FROM persona"
    let result = await pool.query(sql)
    console.log(result[0])
    res.send("PONG")
})
router.post("/", PersonaCrl.create)
router.get("/", PersonaCrl.list)
router.get("/", PersonaCrl.list)

module.exports = router;