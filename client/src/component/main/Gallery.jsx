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
      <div className='backgroundGallery'>
        <video autoPlay muted loop preload='auto' disablePictureInPicture>
          <source src="../../../public/video/background/steam.mp4" type='video/webm' />
        </video>
      </div>
    </div>
  )
}

export default Gallery