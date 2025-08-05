import './App.css'
import './global.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";


//Images
import Hlogo from '/H-logo.svg'

//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//Pages
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App

//    <img src={Hlogo} className="h-[20vh] w-[20vw] bg-gray-700"></img>
