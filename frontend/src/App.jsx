import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./pages/LandingHome.jsx";
import AuthRoutes from "@/features/auth/login-system-frontend/src/App.jsx";
import AdminDashboard from "@/component/Dashboards/AdminDashboard/dashboard-app/src/App.jsx";
import FarmerRoutes from "@/pages/Farmer/FarmerRoutes.jsx";
import ChiefMainPage from "@/pages/ChiefTechnician/ChiefMainPage.jsx";
import TechnicianHome from "@/pages/Technician/TechnicianHome.jsx";

function App() {
    return (
        <div className="bg-white">
            <Routes>
                <Route path="/" element={<LandingHome />} />
                <Route path="/signin/*" element={<AuthRoutes />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/farmer/*" element={<FarmerRoutes />} />
                <Route path="/chiefTechnician/*" element={<ChiefMainPage />} />
                <Route path="/technician/*" element={<TechnicianHome />} />
            </Routes>
        </div>
    );
}

export default App;
