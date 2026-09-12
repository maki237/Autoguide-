import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "sonner"
import LandingPage from "@/Pages/landing"
import Login from "@/Pages/login"
import Register from "@/Pages/register"
import Dashboard from "@/Pages/Automobiliste/dashboard"
import GaragisteDashboard from "@/Pages/Garagiste/dashboard"
import SignalementPanne from "@/Pages/Automobiliste/signalement_panne"
import AdminDashboard from "@/Pages/Admin/dashboard"
import AdminUsers from "@/Pages/Admin/users"
import AdminAccessRights from "@/Pages/Admin/access-rights"
import AdminSystemUpdates from "@/Pages/Admin/system-updates"
import RechercherItinerairePage from "@/Pages/Automobiliste/rechercher_itineraire"

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
        <Route
          path="/rechercher-itineraire"
          element={<RechercherItinerairePage />}
        />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/utilisateurs" element={<AdminUsers />} />
        <Route path="/admin/droits-acces" element={<AdminAccessRights />} />
        <Route path="/admin/mises-a-jour" element={<AdminSystemUpdates />} />
      
      </Routes>

    </BrowserRouter>
  )
}

export default App