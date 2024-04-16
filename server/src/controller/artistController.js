import ArtistService  from '../service/artistService'
import logger  from '../config/loggerConfig'

const serviceArtist = new ArtistService()

const save = async(req, res) =>{
  try{
    const artist = await serviceArtist.save(req.body)
    res.status(200).json(artist)
  } catch(e) {
    logger.log('error', 'Error')
  }
}

const getAll = async(req, res) => {
  try{
    const artist = await serviceArtist.getAll()
    res.status(200).json(artist)
  } catch(e) {
    logger.log('error', 'Error')
  }
}

const getById = async (req, res) => {
  try{
    const { id } = req.params
    const artist = await serviceArtist.getById({ id })
    res.status(200).json(artist)
  } catch(e) {
    logger.log('error', 'Error')
  }
}

export default { 
  getAll,
  getById,
  save
}