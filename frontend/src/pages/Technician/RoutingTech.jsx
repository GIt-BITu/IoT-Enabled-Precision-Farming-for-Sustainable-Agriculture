import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TechnicianHome from "@/pages/Technician/TechnicianHome.jsx";
import TechConfigurtion from "@/pages/Technician/TechConfiguration.jsx";


function RoutingTech() {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/Technician" element={<TechnicianHome />} />
                    <Route path="/Technician/:id" element={<TechConfigurtion />} />
                </Routes>
            </div>
        </>
    )
}

export default RoutingTech;
