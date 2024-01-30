const artistFactory = require('../DAO/artist/daoFactoryArtist')
const { Service } = require('./base/service')

class ArtistService extends Service {
  constructor(){
    super(artistFactory(process.env.STORE))
  }
}

module.exports = { ArtistService }