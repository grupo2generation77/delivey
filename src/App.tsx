import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/Login";
import CatalogoPage from "./pages/catalogo/CatalogoPage";
import { CatalogoHome } from "./components/catalogoHome/CatalogoHome";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CatalogoPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
