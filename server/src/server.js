//Imports
const express = require('express')
const cors = require('cors')

//Routes
const { routerArtist } = require('./route/routeArtist')
// const { routerDetail } = require('./route/routeDetail')
// const { routerAdmin } = require('./route/routeAdmin') 

//Configuración express
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//Routes
app.use('/', routerArtist)
// app.use('/Admin', routerAdmin)
// app.use('/', routerDetail)

//Open port
const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`Running on port ${PORT} - Pid Worker ${process.pid}`)
})