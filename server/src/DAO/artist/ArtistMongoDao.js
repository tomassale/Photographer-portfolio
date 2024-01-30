const { MongoDbContainer } = require('../../container/mongoDBContainer')
const artistModel = require('../../model/ArtistModel')
class ArtistMongoDAO extends MongoDbContainer {

  constructor(url) {
    super(url, artistModel)
  }

  async getAll() {
    return await super.getAll().Artists
  }

  async getById(id){
    return await super.getById(id).Artists
  }

  static getInstance(url){
    if(!this.instance){
      this.instance = new ArtistMongoDAO(url)
    }
    return this.instance
  }
}

module.exports = { ArtistMongoDAO }