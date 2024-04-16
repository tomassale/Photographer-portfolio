import axios from 'axios'
import GalleryDetail from './GalleryDetail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const GalleryDetailContainer = () => {
  const [imageUrls, setImageUrls] = useState([])
  const { folder } = useParams()

  useEffect(() => {
    axios
      .get(`http://localhost:8080/${folder}`)
      .then((res) => setImageUrls(res.data))
      .catch((error) => {
        console.error('Error fetching images:', error)
      })
  }, [folder])

  return (
    <div className='galleryDetailContainer'>
      <GalleryDetail images={imageUrls} />
    </div>
  )
}

export default GalleryDetailContainer