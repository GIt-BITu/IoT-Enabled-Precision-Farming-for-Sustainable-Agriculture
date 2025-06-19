import React from "react";
import TechChiefDashboard from "@/pages/ChiefTechnician/TechChiefDashboard.jsx";
import Task from "@/pages/ChiefTechnician/Task.jsx";
import AllPendingTask from "@/pages/ChiefTechnician/GetReport.jsx";
import UpdateStatus from "@/pages/ChiefTechnician/UpdateStatus.jsx";
import CompletedTasks from "@/pages/ChiefTechnician/CompletedTasks.jsx";
import GetReport from "@/pages/ChiefTechnician/GetReport.jsx";
import Team from "@/pages/ChiefTechnician/Team.jsx";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Configuration from "@/pages/ChiefTechnician/Configuration.jsx";


function ChiefMainPage() {
    return (
        <>
            <div>
                    <Routes>
                        <Route index element={<Navigate to="/dashboard" />} />
                        <Route path="dashboard" element={<TechChiefDashboard />} />
                        <Route path="task/:id" element={<Task />} />
                        <Route path="PendingTasks" element={<AllPendingTask />} />
                        <Route path="updateTask/:id" element={<UpdateStatus />} />
                        <Route path="Completed-Tasks" element={<CompletedTasks />} />
                        <Route path="report/:id" element={<GetReport />} />
                        <Route path="teams" element={<Team/>} />
                        <Route path="configuration" element={<Configuration />} />
                    </Routes>
            </div>
        </>
    )
}

export default ChiefMainPage;
