import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CatalogoPage from "./pages/catalogo/CatalogoPage";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/catalogo" element={<CatalogoPage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
