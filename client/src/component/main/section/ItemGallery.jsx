import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { ImageMovement } from '../../../util/ImageMovement';


const ItemGallery = ({art}) => {
  const upper = art.title[0].toUpperCase() + art.title.slice(1)
  const imageSrc = (index) => `./img/${art.name}/img${index}.jpg`;

  useEffect(() => {
    ImageMovement()
  },[])

  return (
    <div id={art.name} className='itemGallery'>
      <div className='titleContainer'>
        <h1>{art.title.toUpperCase()}</h1>
      </div>
      <div id={`${art.name}Image`}>
        {[art.n1, art.n2, art.n3].map((index) => (
          <NavLink to={`/Gallery/${art.name}`}>
            <img key={index} src={imageSrc(index)} className='imageMain' alt={`Imagen ${index} ${upper}`} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ItemGallery