const router = require('./routes/clientRoutes.js')
const express = require('express')
const app = express()
const PORT = 8001
 
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/auth", router)

app.listen(PORT, () => {
    console.log(`Servidor hospedado em: http://localhost:${PORT}`)
})

module.exports = app