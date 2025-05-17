import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./pages/LandingHome.jsx";

function App() {
    return (
        <div className="bg-white">
            <Routes>
                <Route path="/" element={<LandingHome />} />
            </Routes>
        </div>
    );
}

export default App;
