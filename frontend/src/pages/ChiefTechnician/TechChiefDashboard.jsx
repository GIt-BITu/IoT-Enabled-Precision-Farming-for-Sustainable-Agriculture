import React from "react";
import ChiefMain from "@/component/Dashboards/ChiefTech/ChiefMain.jsx";
import {Link, BrowserRouter as Router, Routes, Navigate} from "react-router-dom";
import SideBar from "@/component/Dashboards/SideBar.jsx";
import {TechnicanLinks} from "/src/component/Dashboards/ChiefTech/Data.jsx";



function TechChiefDashboard(){
    return(<>
            <main>
                <div className="bg-[#f5f5dc] h-screen flex gap-5 p-5">
                    <SideBar sideLinks={TechnicanLinks} activeColor="bg-blue-950 text-[#f5f5dc]"
                             inactiveColor="text-blue-950" hover="hover:bg-blue-950 hover:text-[#f5f5dc]">
                       <div></div>
                    </SideBar>
                    <ChiefMain/>
                </div>

            </main>

        </>
    )
}

export default TechChiefDashboard;