import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sobre from './pages/sobre/Sobre'
import Navbar from './components/navbar/Navbar'
//import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<div><h1>Rota não encontrada</h1></div>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;