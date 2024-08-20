import GalleryDetail from './GalleryDetail'
import GetHook from '../../../hook/GetHook'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const GalleryDetailContainer = () => {
  const [imageUrls, setImageUrls] = useState([])
  const { folder } = useParams()
  const { data, loading} = GetHook(`http://localhost:8080/${folder}`)

  useEffect(() => {
    if (Array.isArray(data)) {
      setImageUrls(data)
    } else {
      setImageUrls([])
    }
  }, [data])

  return (
    <div className='galleryDetail'>
      {loading ? (
        <div className='loadingDetail'>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <h1 className='titleDetail'>{folder}</h1>
          <GalleryDetail 
            images={imageUrls} 
            folders={folder}
          />
        </>
      )}
    </div>
  )
}

export default GalleryDetailContainer