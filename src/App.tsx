import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Cadastro from './pages/cadastro/Cadastro'


function App() {
  return (
    <>
        <BrowserRouter>
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
