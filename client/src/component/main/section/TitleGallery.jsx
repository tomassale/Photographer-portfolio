const TitleGallery = ({ title, isVisible }) => {
  return (
    <h1 className={`titleGallery ${isVisible ? 'visible' : ''}`}>
      {title}
    </h1>
  )
}

export default TitleGallery
