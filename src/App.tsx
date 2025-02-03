import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import CatalogoPage from "./pages/catalogo/CatalogoPage";
import { CatalogoHome } from "./components/catalogoHome/CatalogoHome";
import { teste } from "./services/Service";
import Navbar from './components/navbar/Navbar';

function App() {
  console.log(teste())
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<CatalogoPage />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;