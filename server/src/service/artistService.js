import artistFactory from '../DAO/artist/daoFactoryArtist'
import Service from './base/service'

class ArtistService extends Service {
  constructor(){
    super(artistFactory(process.env.STORE))
  }
}

export default ArtistService