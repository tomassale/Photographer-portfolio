const { ArtistService } = require('../service/artistService')
const serviceArtist = new ArtistService()
const { logger } = require('../config/loggerConfig')

class ArtistController {
  async save(req, res){
    try{
      const artist = serviceArtist.save(req.body)
      res.status(200).json(artist)
    } catch(e) {
      logger.log('error', 'Error')
    }
  }

  async getAll(req, res){
    try{
      const artist = serviceArtist.getAll()
      res.status(200).json(artist)
    } catch(e) {
      logger.log('error', 'Error')
    }
  }

  async getById(req, res){
    try{
      const { id } = req.params
      const artist = serviceArtist.getById({ id })
      res.status(200).json(artist)
    } catch(e) {
      logger.log('error', 'Error')
    }
  }
}

module.exports = { ArtistController }