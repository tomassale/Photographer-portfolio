import { useState } from "react"
import Loader from './util/Loader'
import Initial from "./section/Initial"
import GalleryList from "./gallery/GalleryList"

const GalleryListContainer = () => {

  const [list, setList] = useState([])

  return (
    <div className="galleryListContainer">
      {list.length === 0? (
        <Loader/>
      ):(
        <>
          <Initial/>
          <GalleryList prop={list}/>
        </>
      )}
    </div>
  )
}

export default GalleryListContainer