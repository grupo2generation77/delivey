import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CatalogoPage from "./pages/catalogo/CatalogoPage";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import Sobre from "./pages/sobre/Sobre";


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
          <BrowserRouter>
            <Navbar />
            <div className="min-h-[80vh]">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/catalogo" element={<CatalogoPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Sobre" element={<Sobre />} />
              </Routes>
            </div>
          </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
