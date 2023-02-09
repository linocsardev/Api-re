const {Router} = require("express")
const router = Router()

const PersonaCrl = require("../controllers/persona.controller")

router.get("/ping", async (req, res)=>{
})
router.get("/", PersonaCrl.list)
router.post("/", PersonaCrl.create)
router.get("/", PersonaCrl.list)

module.exports = router;