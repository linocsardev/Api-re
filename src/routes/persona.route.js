const {Router} = require("express")
const router = Router()

const PersonaCrl = require("../controllers/persona.controller")

router.get("/", PersonaCrl.list)

module.exports = router;