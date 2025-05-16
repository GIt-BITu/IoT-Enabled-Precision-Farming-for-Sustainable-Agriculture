import React from 'react';
import SideBar from '../../component/Dashboards/SideBar.jsx';
import Main from "@/component/Dashboards/Farmer/Common/Main.jsx";
import ComplaintSidebar from "@/component/Dashboards/Farmer/Common/ComplaintSidebar.jsx";
import {sideLinks} from "@/component/Dashboards/Farmer/data.jsx";

function FarmerDashboard(){
    return (
        <>
                <div className="bg-[#152a1b] h-screen flex gap-5 p-5">
                    <SideBar sideLinks={sideLinks} activeColor="bg-[#cbe1bd] text-[#0c1b0e]"
                             inactiveColor="text-[#f1f7e7]" hover="hover:bg-[#cbe1bd] hover:text-[#0c1b0e]"
                             logoColor="text-[#f1f7e7]">
                        <ComplaintSidebar/>
                    </SideBar>
                    <Main />
                </div>
        </>
    )
}
export default FarmerDashboard;