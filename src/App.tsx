import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import "./App.css";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
