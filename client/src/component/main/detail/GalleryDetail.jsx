const GalleryDetail = ({fileDetail}) => {

  return (
    <div className="galleryDetail">
      {fileDetail.map((obj, index)=>(
        <img key={index} src={obj} alt='imageGallery'/>
      ))}
    </div>
  )
}

export default GalleryDetail