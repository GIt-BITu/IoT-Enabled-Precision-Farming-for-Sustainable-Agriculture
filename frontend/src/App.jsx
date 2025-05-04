import React from "react";
import LandingHome from "./pages/LandingHome.jsx";
import NavBar from "./component/NavBar.jsx";
import TechChiefDashboard from "@/pages/TechChiefDashboard.jsx";
import Task  from "@/pages/Task.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AllPendingTasks from "@/pages/AllPendingTask.jsx";

function App() {
    return (
        <>
            <div>
                <Router>
                    <Routes>
                        <Route path="/chiefTechnician" element={<TechChiefDashboard />} />
                        <Route path="/chiefTechnician/task/:id" element={<Task />} />
                        <Route path="/chiefTechnician/PendingTasks" element={<AllPendingTasks />} />
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App
