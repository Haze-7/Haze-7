import './App.css'
import './global.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import {useState} from 'react';

//Images
import Hlogo from '/H-logo.svg';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Pages
import Home from './pages/Home'

function App() {

  const [mode, setMode] = useState(false);


  return (
    <>
    <div data-theme={mode ? "light" : "dark"}>
      <BrowserRouter>
        <Navbar mode={mode} setMode={setMode} />
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App

//    <img src={Hlogo} className="h-[20vh] w-[20vw] bg-gray-700"></img>
