import { BrowserRouter, Route, Routes } from "react-router-dom";
/*  import { ToastContainer } from "react-toastify";
import Footer from "./components/footer/Footer";   */
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CatalogoPage from "./pages/catalogo/CatalogoPage";
import { teste } from "./services/Service";
import Navbar from "./components/navbar/Navbar";
import Sobre from "./pages/sobre/Sobre";

function App() {
  console.log(teste());
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
