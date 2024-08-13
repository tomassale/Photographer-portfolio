const GalleryDetail = ({ images }) => {
  console.log('Recibiendo imágenes:', images);
  if (!Array.isArray(images)) {
    return <div>No images available</div>;
  }

  return (
    <>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`img${index}`} width={500} height={500} />
      ))}
    </>
  );
};

export default GalleryDetail