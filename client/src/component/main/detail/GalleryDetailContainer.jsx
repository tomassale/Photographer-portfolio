import { useEffect, useState } from "react"
import GalleryDetail from "./GalleryDetail"

const GalleryDetailContainer = () => {
  const [imagePaths, setImagePaths] = useState([])

  useEffect(()=>{
    const importAll = (r) => r.keys().map(r)
    const imgs = importAll(require.context('../../../../public/img/asspera', false, /\.(png|jpe?g|svg)$/))
    setImagePaths(imgs)
  },[])

  return (
    <div className="galleryDetailContainer">
      <GalleryDetail fileDetail={imagePaths}/>
    </div>
  )
}

export default GalleryDetailContainer