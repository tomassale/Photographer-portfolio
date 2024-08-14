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
    <>
      {loading ? (
        <div style={styleNoImage}>Loading...</div>
      ) : (
        <div className='galleryDetail'>
          <h1 className='titleFire'>{folder}</h1>
          <GalleryDetail images={imageUrls} folders={folder} />
        </div>
      )}
    </>
  )
}

const styleNoImage = {
  color: 'white',
  textAlign: 'center',
  fontSize: '40px',
  padding: '20px'
}

export default GalleryDetailContainer
