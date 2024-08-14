import Initial from './section/Initial'
import Loader from '../../util/Loader'
import ItemGallery from './section/ItemGallery'
import artist from '../../data/artist.json'

const Gallery = () => {
  return (
    <div className='gallery'>
      <Initial/>
      {!artist ?(
        <Loader/>
      ):(
        artist.map((obj) => {
          return <ItemGallery key={obj._id} art={obj}/>
        })
      )}
    </div>
  )
}

export default Gallery