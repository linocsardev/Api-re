const express = require('express')
const morgan = require("morgan")
const app = express()

const personaRouter = require('./src/routes/persona.route')

//middleware
app.use(morgan("dev"))
app.use(express.json())
app.use('/api/persona', personaRouter)


app.get('/', (req, res) => {
  res.send('<h1>PAGINA PRINCIPAL</h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})

module.exports = app;
