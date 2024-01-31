import Initial from './section/Initial'
import Loader from './util/Loader'
import Artist from './section/ItemGallery'
import data from '../../data/artist.json'

const Gallery = () => {
  return (
    <div className='gallery'>
      <Initial/>
      {!data ?(
        <Loader/>
      ):(
        data.map((obj) => {
          return <Artist key={obj.id} art={obj}/>
        })
      )}
    </div>
  )
}

export default Gallery