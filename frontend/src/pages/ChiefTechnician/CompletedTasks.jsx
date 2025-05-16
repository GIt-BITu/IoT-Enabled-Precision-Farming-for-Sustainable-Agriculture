import React from "react";
import SideBar from "@/component/Dashboards/SideBar.jsx";
import Completed from "@/component/Dashboards/ChiefTech/Completed.jsx";
import {TechnicanLinks} from "/src/component/Dashboards/ChiefTech/Data.jsx";



function CompletedTasks() {
    return(<>
            <main>
                <div className="bg-[#f5f5dc] h-screen flex gap-5 p-5">
                    <SideBar sideLinks={TechnicanLinks} activeColor="bg-blue-950 text-[#f5f5dc]"
                             inactiveColor="text-blue-950" hover="hover:bg-blue-950 hover:text-[#f5f5dc]">
                        <div></div>
                    </SideBar>
                    <Completed/>
                </div>

            </main>

        </>
    )
}

export default CompletedTasks;