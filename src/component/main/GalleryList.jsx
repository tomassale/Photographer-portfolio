import Gallery from "./Gallery"

const GalleryList = ({prop}) => {
  return (
    <>
      {prop.map((obj)=>(<Gallery key={obj.id} file={obj}/>))}
    </>
  )
}

export default GalleryList