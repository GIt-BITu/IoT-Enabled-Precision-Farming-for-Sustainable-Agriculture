import React from "react";
import Button from "@/component/Button.jsx";
import {Link} from "react-router-dom";

function SubmissionsMain() {
    return (
        <>
            <div className="flex flex-col mt-8">
                <h1 className="font-semibold text-2xl mb-2">Demands</h1>
                <div className="bg-white rounded-md p-5">
                    <table className="w-full px-5 table-fixed bg-[#f3f8f8] text-center rounded-md border-separate border-spacing-y-3">
                        <thead>
                        <tr>
                            <th className="w-[20%]">Title</th>
                            <th>Date</th>
                            <th className="w-[10%]">Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Sensors</td>
                            <td>12-05-2025</td>
                            <td className="bg-red-300 text-red-800 font-black rounded-lg">pending</td>
                            <td className="space-x-1">
                                <Link to="#"><Button className="bg-red-600 rounded-md text-white">Details</Button></Link>
                                <Link to="#"><Button className="bg-blue-600 text-white rounded-md">Report</Button></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Sensors</td>
                            <td>20-04-2025</td>
                            <td className="bg-red-300 text-red-800 font-black rounded-lg">pending</td>
                            <td className="space-x-1">
                                <Link to="#"><Button className="bg-red-600 rounded-md text-white">Details</Button></Link>
                                <Link to="#"><Button className="bg-blue-600 text-white rounded-md">Report</Button></Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="truncate">Sensors/Actuators</td>
                            <td>01-02-2025</td>
                            <td className="bg-green-300 text-green-800 font-black rounded-lg">in progress</td>
                            <td className="space-x-1">
                                <Link to="#"><Button className="bg-red-600 rounded-md text-white">Details</Button></Link>
                                <Link to="#"><Button className="bg-blue-600 text-white rounded-md">Report</Button></Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="font-semibold text-2xl mt-5 mb-2">Complaints</h1>
                <div className="bg-white rounded-md p-5">
                    <table className="w-full px-5 table-fixed bg-[#f3f8f8] text-center rounded-md border-separate border-spacing-y-3">
                        <thead>
                        <tr>
                            <th className="w-[20%]">Title</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th className="w-[10%]">Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Technical Issue Report</td>
                            <td>08-12-2024</td>
                            <td>Technical</td>
                            <td className="bg-red-300 text-red-800 font-black rounded-lg">pending</td>
                            <td className="space-x-1">
                                <Link to="#"><Button className="bg-red-600 rounded-md text-white">Details</Button></Link>
                                <Link to="#"><Button className="bg-blue-600 text-white rounded-md">Report</Button></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Delayed Sensor Installation</td>
                            <td>12-10-2024</td>
                            <td>Service</td>
                            <td className="bg-red-300 text-red-800 font-black rounded-lg">pending</td>
                            <td className="space-x-1">
                                <Link to="#"><Button className="bg-red-600 rounded-md text-white">Details</Button></Link>
                                <Link to="#"><Button className="bg-blue-600 text-white rounded-md">Report</Button></Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Technician Did Not Arrive</td>
                            <td>10-08-2024</td>
                            <td>Service</td>
                            <td className="bg-red-300 text-red-800 font-black rounded-lg">pending</td>
                            <td className="space-x-1">
                                <Link to="#"><Button className="bg-red-600 rounded-md text-white">Details</Button></Link>
                                <Link to="#"><Button className="bg-blue-600 text-white rounded-md">Report</Button></Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SubmissionsMain;