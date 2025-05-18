import React from 'react';
import SideBar from "@/component/Dashboards/SideBar.jsx";
import {TechnicanLinks} from "@/component/Dashboards/ChiefTech/Data.jsx";
import AllDevices from "@/component/Dashboards/ChiefTech/AllDevices.jsx";

function ConnectDevice() {
    return (
        <>
            <main>
                <div className="bg-[#f5f5dc] h-screen flex gap-5 p-5">
                    <SideBar sideLinks={TechnicanLinks} activeColor="bg-blue-950 text-[#f5f5dc]"
                             inactiveColor="text-blue-950" hover="hover:bg-blue-950 hover:text-[#f5f5dc]">
                        <div></div>
                    </SideBar>
                    <AllDevices />
                </div>

            </main>
        </>
    )
}

export default ConnectDevice;