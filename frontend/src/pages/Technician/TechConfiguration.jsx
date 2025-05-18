import SideBar from "@/component/Dashboards/SideBar.jsx";
import React from "react";
import {TechnicianLinks} from "@/component/Dashboards/Technician/DataTech.jsx";
import TechConfig from "@/component/Dashboards/Technician/TechConfig.jsx";


function TechConfigurtion() {

    return (<>
        <main>
            <div className="bg-[#f5f5dc] h-screen flex gap-5 p-5">
                <SideBar sideLinks={TechnicianLinks} activeColor="bg-blue-950 text-[#f5f5dc]" inactiveColor="text-blue-950" hover="hover:bg-blue-950 hover:text-[#f5f5dc]">
                    <div></div>
                </SideBar>
                <TechConfig />
            </div>
        </main>

    </>)
}
export default TechConfigurtion;