import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Gallery from './component/main/Gallery'
import GalleryDetailContainer from './component/main/detail/GalleryDetailContainer'
import Test from './test/Test'
import MouseFollower from './util/MouseFollower'
import Navbar from './component/header/Navbar'
import Footer from './component/footer/Footer'

const App = () => {
  return(
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/:folder' element={<GalleryDetailContainer/>}/>
          <Route path='Test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    <MouseFollower/>
    <Footer/>
    </>
  )
}

export default App