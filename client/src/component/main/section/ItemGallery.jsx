import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'

const ItemGallery = ({art}) => {
  const upper = art.title[0].toUpperCase() + art.title.slice(1)
  const imageSrc = (index) => `./img/${art.name}/img${index}.jpg`;

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
    
      const images = document.querySelectorAll('.imageMain');
    
      images.forEach(image => {
        const imageRect = image.getBoundingClientRect();
        const imageCenterX = imageRect.left + imageRect.width / 2;
        const imageCenterY = imageRect.top + imageRect.height / 2;
    
        const deltaX = mouseX - imageCenterX;
        const deltaY = mouseY - imageCenterY;
    
        const displacementX = -5 * (deltaX / Math.sqrt(deltaX**2 + deltaY**2));
        const displacementY = -5 * (deltaY / Math.sqrt(deltaX**2 + deltaY**2));
    
        image.style.transform = `translate(${displacementX}px, ${displacementY}px)`;
      })
    })
  },[])

  return (
    <div id={art.name} className='itemGallery'>
      <h1>{art.title.toUpperCase()}</h1>
      <div id={`${art.name}Image`}>
        {[art.n1, art.n2, art.n3].map((index) => (
          <NavLink to={`/Gallery/${art.id}`}>
            <img key={index} src={imageSrc(index)} className='imageMain' alt={`Imagen ${index} ${upper}`} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ItemGallery