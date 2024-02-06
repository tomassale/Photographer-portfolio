const GalleryDetail = ({ images }) => {
  if (!images || typeof images !== 'object' || Object.keys(images).length === 0) {
    return <div>No images to display</div>;
  }
  return (
    <>
      {Object.values(images).map((src, index) => (
        <img key={index} src={src} alt='imageGallery' />
      ))}
    </>
  )
}

export default GalleryDetail