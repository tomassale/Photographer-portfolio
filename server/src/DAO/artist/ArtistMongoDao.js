import { MongoDbContainer } from '../../container/mongoDBContainer'
import artistModel from '../../model/ArtistModel'
class ArtistMongoDAO extends MongoDbContainer {

  constructor(url) {
    super(url, artistModel)
  }

  async getAll() {
    return await super.getAll().Artist
  }

  async getById(id){
    return await super.getById(id).Artist
  } 

  static getInstance(url){
    if(!this.instance){
      this.instance = new ArtistMongoDAO(url)
    }
    return this.instance
  }
}

export default ArtistMongoDAO 