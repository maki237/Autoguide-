import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import LandingPage from "@/Pages/landing"
import Login from "@/Pages/login"
import Register from "@/Pages/register"
import Dashboard from "@/Pages/Automobiliste/dashboard"
import GaragisteDashboard from "@/Pages/Garagiste/dashboard"
import SignalementPanne from "@/Pages/Automobiliste/signalement_panne"

function App() {
  return (
    <BrowserRouter>
 
      <Toaster position="top-right" richColors />
      <Routes>

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/garagiste/dashboard"
          element={<GaragisteDashboard />}
        />
        <Route
          path="/signalement panne"
          element={<SignalementPanne />}
        />
      
      </Routes>

    </BrowserRouter>
  )
}

export default App