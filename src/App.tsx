import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "@/Pages/landing"
import Login from "@/Pages/login"
import Register from "@/Pages/register"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Page d'accueil */}
        <Route path="/" element={<LandingPage />} />

        {/* Authentification */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App