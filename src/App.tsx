import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Navbar from './components/navbar/Navbar'
//import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;