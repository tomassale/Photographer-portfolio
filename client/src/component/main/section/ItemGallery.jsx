import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ImageMovement } from '../../../util/function'
import TitleGallery from './TitleGallery'
import IntersectionObserver from '../../../util/IntersectionObserver'

const ItemGallery = ({ art }) => {
  const upper = art.title[0].toUpperCase() + art.title.slice(1)
  const imageSrc = (index) => `./img/artist/${art.name}/img${index}.jpg`

  const [ref, isIntersecting] = IntersectionObserver({
    threshold: 0.42,
  })

  useEffect(() => {
    ImageMovement()
  }, [])

  return (
    <div id={art.name} className='itemGallery' ref={ref}>
      <TitleGallery title={art.title.toUpperCase()} isVisible={isIntersecting} />
      <div id={`${art.name}Image`}>
        {[art.n1, art.n2, art.n3].map((index) => (
          <NavLink key={index} to={`/${art.name}`}>
            <img 
              key={index} 
              src={imageSrc(index)}
              className='imageMain'
              alt={`Imagen ${index} ${upper}`} 
            />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default ItemGallery