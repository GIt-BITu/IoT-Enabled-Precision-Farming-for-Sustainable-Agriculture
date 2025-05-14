import React from "react";
import {BrowserRouter} from "react-router-dom";
import FarmerRoutes from "@/pages/Farmer/FarmerRoutes.jsx";

function App() {
    return (
        <>
            <div>
                <BrowserRouter>
                    <FarmerRoutes />
                </BrowserRouter>
            </div>
        </>

    )
}

export default App
