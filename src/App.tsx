import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import Catalogo from "./pages/catalogo/Catalogo";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Catalogo />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
