
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


import Login from "./pages/login/Login";

function App() {
  return (
    <>

        <BrowserRouter>
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
    </>
  )
}

export default App
