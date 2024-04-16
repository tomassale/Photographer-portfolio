import ArtistMongoDAO  from './ArtistMongoDao.js'

const artistFactory = (type = process.env.STORE) => {
  if (type === 'MONGO') {
    return ArtistMongoDAO.getInstance(process.env.MONGO_ATLAS)
  }
}

export default artistFactory 