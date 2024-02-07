const GalleryDetail = ({ images }) => {
  return (
    <>
      {!images || typeof images !== 'object' || Object.keys(images).length === 0 ?(
        <div>No images to display</div>
      ):(
        images.map((src, index) => (
          <img key={index} src={src} alt='imageGallery' />
        ))
      )}
    </>
  )
}

export default GalleryDetail