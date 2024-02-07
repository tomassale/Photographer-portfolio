import { useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import GalleryDetail from './GalleryDetail'

const GalleryDetailContainer = () => {
  const[imageUrls, setImageUrls] = useState([])
  const { _id } = useParams()
  console.log('http://localhost:3000'+useLocation().pathname)

  useEffect(() => {
    const fetchImageUrls = async () =>{
      try{
        const res = await fetch(`/img/${_id}`)
        const imageFiles = await res.json()
        setImageUrls(imageFiles.map(file => `/img/${_id}/${file}`))
      } catch(e){
        console.error('Error fetching images: ', e)
      }
    }  
    fetchImageUrls()
  },[_id])

  return (
    <div className='galleryDetailContainer'>
      <GalleryDetail images={imageUrls}/>
    </div>
  )
}

export default GalleryDetailContainer