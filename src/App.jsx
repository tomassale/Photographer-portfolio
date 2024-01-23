import Navbar from './component/header/Navbar'
import Intro from './component/main/Intro'
import Booking from './component/main/Booking'
import Knowledge from './component/main/Knowledge'
import Contact from './component/main/Contact'
import Footer from './component/footer/Footer'

const App = () => {
  return(
    <>
      <Navbar/>
      <Intro/>
      <hr/>
      <Booking/>
      <hr/>
      <Knowledge/>
      <hr/>
      <Contact/>
      <hr/>
      <Footer/>
    </>
  )
}

export default App