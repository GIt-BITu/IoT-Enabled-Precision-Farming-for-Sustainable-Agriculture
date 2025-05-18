import SideBar from "@/component/Dashboards/SideBar.jsx";
import React from "react";
import {TechnicanLinks} from "/src/component/Dashboards/ChiefTech/Data.jsx";
import TechnicianDashboard from "@/component/Dashboards/Technician/Techdashboard.jsx";
import {TechnicianLinks} from "@/component/Dashboards/Technician/DataTech.jsx";


function TechnicianHome() {

    return (<>
        <main>
            <div className="bg-[#f5f5dc] h-screen flex gap-5 p-5">
                <SideBar sideLinks={TechnicianLinks} activeColor="bg-blue-950 text-[#f5f5dc]" inactiveColor="text-blue-950" hover="hover:bg-blue-950 hover:text-[#f5f5dc]">
                    <div></div>
                </SideBar>
                <TechnicianDashboard />
            </div>
        </main>

    </>)
}
export default TechnicianHome;