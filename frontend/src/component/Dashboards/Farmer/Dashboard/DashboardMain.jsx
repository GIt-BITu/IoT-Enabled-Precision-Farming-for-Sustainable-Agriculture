import React from "react";
import Weather from "@/component/Dashboards/Farmer/Dashboard/Weather.jsx";
import Monitoring from "@/component/Dashboards/Farmer/Dashboard/Monitoring.jsx";

function DashboardMain(){
    return(
        <>
            <div className="mt-8 p-3 h-screen flex flex-col rounded-md overflow-y-scroll scrollbar-colored">
                <div>
                    <Weather />
                </div>
                <div>
                    <Monitoring  />
                </div>
            </div>
        </>
    )
}

export default DashboardMain;