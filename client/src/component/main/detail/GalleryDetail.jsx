const GalleryDetail = ({ images }) => {
  return (
    <>
      {!images || !Array.isArray(images) || images.length === 0 ? (
        <div style={styleNoImage}>No images to display</div>
      ) : (
        images.map((image, index) => (
          <img key={index} src={image.url} alt={image.nombre} />
        ))
      )}
    </>
  );
};

const styleNoImage = {
  color: 'white',
  textAlign: 'center',
  fontSize: '40px',
  padding: '20px'
};

export default GalleryDetail;
