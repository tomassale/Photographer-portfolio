const ItemGallery = ({name, title, n1, n2, n3}) => {
  const upper = title[0].toUpperCase() + title.slice(1)
  const imageSrc = (index) => `./img/${name}/img${index}.jpg`;

  return (
    <div id={name} className='itemGallery'>
      <h1>{title.toUpperCase()}</h1>
      <div id={`${name}Image`}>
        {[n1, n2, n3].map((index) => (
          <img key={index} src={imageSrc(index)} alt={`Imagen ${index} ${upper}`} />
        ))}
      </div>
    </div>
  )
}

export default ItemGallery