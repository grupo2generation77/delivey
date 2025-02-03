import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CatalogoPage from "./pages/catalogo/CatalogoPage";
import { CatalogoHome } from "./components/catalogoHome/CatalogoHome";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { Home } from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
