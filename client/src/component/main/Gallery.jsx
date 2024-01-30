import Initial from './section/Initial'
import Artist from './section/ItemGallery'

const Gallery = () => {
  return (
    <div className='gallery'>
      <Initial/>
      <Artist name='cosquin' title='cosquin rock' n1='1' n2='2' n3='3'/>
      <Artist name='kapanga' title='kapanga' n1='1' n2='6' n3='7'/>
      <Artist name='pericos' title='los pericos' n1='1' n2='5' n3='7'/>
      <Artist name='renga' title='la renga' n1='4' n2='6' n3='7'/>
      <Artist name='rataBlanca' title='rata blanca' n1='2' n2='3' n3='8'/>
      <Artist name='skay' title='skay beilinson' n1='3' n2='4' n3='7'/>
      <Artist name='koinoYokan' title='koino yokan' n1='1' n2='2' n3='4'/>
      <Artist name='babasonicos' title='babasonicos' n1='1' n2='2' n3='6'/>
      <Artist name='pastillasDelAbuelo' title='las pastillas del abuelo' n1='1' n2='2' n3='3'/>
      <Artist name='asspera' title='asspera' n1='1' n2='3' n3='4'/>
      <Artist name='parraleños' title='parraleños' n1='1' n2='2' n3='3'/>
      <Artist name='ntvg' title='no te va gustar' n1='2' n2='6' n3='9'/>
    </div>
  )
}

export default Gallery