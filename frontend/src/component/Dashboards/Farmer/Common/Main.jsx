import React from 'react';
import NavigationBar from "@/component/Dashboards/Farmer/Common/NavigationBar.jsx";
import {Outlet} from "react-router-dom";

function Main(){
    return (
        <>
            <div className="bg-[#f3f8f8] w-[calc(100%-275px)] rounded-md p-5 flex flex-col">
                <NavigationBar />
                <Outlet />
            </div>
        </>
    )
}

export default Main;