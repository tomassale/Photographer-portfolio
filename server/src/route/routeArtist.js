const express = require('express')
const { ArtistController } = require('../controller/artistController')

const routerArtist = express.Router()
const artistController = new ArtistController()

routerArtist.get('/', artistController.getAll)
routerArtist.get('/:id', artistController.getById)

module.exports = { routerArtist }