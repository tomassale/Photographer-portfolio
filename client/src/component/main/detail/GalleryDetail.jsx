const GalleryDetail = ({ images, folders }) => {
  if (!Array.isArray(images)) {
    return <div>No images available</div>
  }


  return (
    <>
      {images.map((image, index) => (
        <img 
          key={index}
          src={`/img/artist/${folders}/${image}`}
          alt={`img${index}`}
          className="itemDetail"
        />
      ))}
    </>
  )
}

export default GalleryDetail