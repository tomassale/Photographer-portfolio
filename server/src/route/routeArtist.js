const express = require('express')
const { ArtistController } = require('../controller/artistController')
const routerArtist = express.Router()

routerArtist.get('/', ArtistController.getAll)
routerArtist.get('/:id', ArtistController.getById)

module.exports = { routerArtist }