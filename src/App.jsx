import Navbar from './component/header/Navbar'
import Intro from './component/main/Intro'
import Booking from './component/main/Booking'
import Knowledge from './component/main/knowledge/Knowledge'
import Contact from './component/main/Contact'
import Footer from './component/footer/Footer'
import MouseFollower from './component/main/mouse/MouseFollower'

const App = () => {
  return(
    <>
      <Navbar/>
      <Intro/>
      <hr/>
      <Knowledge/>
      <hr/>
      <Booking/>
      <hr/>
      <Contact/>
      <MouseFollower/>
      <Footer/>
    </>
  )
}

export default App