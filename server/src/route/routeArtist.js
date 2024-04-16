import express from 'express'
import artistController from '../controller/artistController'

const routerArtist = express.Router()

routerArtist.get('/', artistController.getAll)
routerArtist.get('/:id', artistController.getById)

export default { routerArtist }