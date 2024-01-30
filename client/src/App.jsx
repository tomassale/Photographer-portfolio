import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Gallery from './component/main/Gallery'
import GalleryDetailContainer from './component/main/detail/GalleryDetailContainer'
import MouseFollower from './component/main/util/MouseFollower'
import Navbar from './component/header/Navbar'
import Footer from './component/footer/Footer'

const App = () => {
  return(
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Gallery/>}/>
          <Route path='/Gallery/:id' element={<GalleryDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    <MouseFollower/>
    <Footer/>
    </>
  )
}

export default App