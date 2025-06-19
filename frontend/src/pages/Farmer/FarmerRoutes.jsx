import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import FarmerDashboard from "@/pages/Farmer/FarmerDashboard.jsx";
import DashboardMain from "@/component/Dashboards/Farmer/Dashboard/DashboardMain.jsx";
import ControllingMain from "@/component/Dashboards/Farmer/Controlling/ControllingMain.jsx";
import SubmissionsMain from "@/component/Dashboards/Farmer/Submissions/SubmissionsMain.jsx";
import Complaint from "@/component/Dashboards/Farmer/Requests/Complaint.jsx";
import DemandInstallation from "@/component/Dashboards/Farmer/Requests/DemandInstallation.jsx";
import Setting from "@/component/Dashboards/Farmer/Settings/Setting.jsx";
import Evaluation from "@/component/Dashboards/Farmer/Evaluation/Evaluation.jsx";
import DemandDetail from "@/component/Dashboards/Farmer/Requests/DemandDetail.jsx";
import ComplaintDetails from "@/component/Dashboards/Farmer/Requests/ComplaintDetails.jsx";
import MonitoringGreenhouse from "@/component/Dashboards/Farmer/Dashboard/MonitoringGreenhouse.jsx";

function FarmerRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<FarmerDashboard />}>
                    <Route index element={<Navigate to="dashboard" />} />
                    <Route path="dashboard" element={<DashboardMain />} />
                    <Route path="controlling" element={<ControllingMain />} />
                    <Route path="submissions" element={<SubmissionsMain/>} />
                    <Route path="complaint" element={<Complaint />} />
                    <Route path="installation" element={<DemandInstallation />} />
                    <Route path="settings" element={<Setting />} />
                    <Route path="evaluation" element={<Evaluation />} />
                    <Route path="demandDetail/:id" element={<DemandDetail />} />
                    <Route path="complaintDetail/:id" element={<ComplaintDetails />} />
                    <Route path="dashboard/:id" element={<MonitoringGreenhouse />} />
                </Route>
            </Routes>
        </>
    )
}

export default FarmerRoutes;