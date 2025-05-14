import React from "react";
import TechChiefDashboard from "@/pages/ChiefTechnician/TechChiefDashboard.jsx";
import Task from "@/pages/ChiefTechnician/Task.jsx";
import AllPendingTask from "@/pages/ChiefTechnician/GetReport.jsx";
import UpdateStatus from "@/pages/ChiefTechnician/UpdateStatus.jsx";
import CompletedTasks from "@/pages/ChiefTechnician/CompletedTasks.jsx";
import GetReport from "@/pages/ChiefTechnician/GetReport.jsx";
import Team from "@/pages/ChiefTechnician/Team.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function ChiefMainPage() {
    return (
        <>
            <div>
                    <Routes>
                        <Route path="/chiefTechnician" element={<TechChiefDashboard />} />
                        <Route path="/task/:id" element={<Task />} />
                        <Route path="/PendingTasks" element={<AllPendingTask />} />
                        <Route path="/updateTask/:id" element={<UpdateStatus />} />
                        <Route path="/Completed-Tasks" element={<CompletedTasks />} />
                        <Route path="/report/:id" element={<GetReport />} />
                        <Route path="/teams" element={<Team/>} />
                    </Routes>
            </div>
        </>
    )
}

export default ChiefMainPage;
