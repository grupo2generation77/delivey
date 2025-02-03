import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sobre from './pages/sobre/Sobre'
import Navbar from './components/navbar/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;