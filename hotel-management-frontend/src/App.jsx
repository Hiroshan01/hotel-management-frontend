import Header from "./assets/componentes/header/header.jsx"
import './App.css'
import './index.css'
import AdminPage from "./assets/componentes/pages/admin.jsx"
import HomePage from "./pages/client-page/homePage.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes path="/*">
          <Route path="/" element={<HomePage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/*" element={
            <div className="w-full h-[100vh] bg-green-400">
              404
            </div>
            } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
