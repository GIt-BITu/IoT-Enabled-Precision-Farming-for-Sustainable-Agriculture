import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./pages/LandingHome.jsx";
import AuthRoutes from "@/features/auth/login-system-frontend/src/App.jsx";

function App() {
    return (
        <div className="bg-white">
            <Routes>
                <Route path="/" element={<LandingHome />} />
                <Route path="/signin/*" element={<AuthRoutes />} />
                <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
                <Route path="/farmer" element={<h1>Farmer Dashboard</h1>} />
                <Route path="/dashboard" element={<h1>Generic Dashboard</h1>} />
            </Routes>
        </div>
    );
}

export default App;
