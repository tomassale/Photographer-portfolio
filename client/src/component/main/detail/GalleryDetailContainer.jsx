import { useParams } from 'react-router-dom'
import GalleryDetail from './GalleryDetail'
import importImages from '../../../util/importImages'

const GalleryDetailContainer = () => {
  const { _id } = useParams()
  const images = importImages(_id)
  return (
    <div className='galleryDetailContainer'>
      <GalleryDetail images={images}/>
    </div>
  )
}

export default GalleryDetailContainer