import { NavLink } from 'react-router-dom'

const ItemGallery = ({art}) => {
  const upper = art.title[0].toUpperCase() + art.title.slice(1)
  const imageSrc = (index) => `./img/${art.name}/img${index}.jpg`;

  return (
    <div id={art.name} className='itemGallery'>
      <h1>{art.title.toUpperCase()}</h1>
      <div id={`${art.name}Image`}>
        {[art.n1, art.n2, art.n3].map((index) => (
          <NavLink to={`/Gallery/${art.id}`}>
            <img key={index} src={imageSrc(index)} alt={`Imagen ${index} ${upper}`} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ItemGallery