import ItemListFooter from "./ItemListFooter"
import footer from '../../data/footer.json'

const Footer = () => {
  return (
    <footer className='footer'>
      <hr/>
      <div className='info'>
        <ItemListFooter footer={footer}/>
      </div>
      <h2>Powered by <a href='https://github.com/tomassale' target='_blank' rel='noreferrer'>Tomás Sale</a> - © 2024 All rights reserved</h2>
    </footer>
  )
}

export default Footer