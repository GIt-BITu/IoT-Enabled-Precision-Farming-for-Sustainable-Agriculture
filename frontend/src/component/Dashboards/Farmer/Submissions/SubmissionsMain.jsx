import React, {useEffect, useState} from "react";
import Button from "@/component/Button.jsx";
import {Link} from "react-router-dom";
import axios from "axios";

function SubmissionsMain() {
    const [complaints, setComplaints] = useState([]);
    const[demands,  setDemands] = useState([]);

    useEffect(() => {
        loadComplaint();
        loadDemand();
    }, [])

    const loadComplaint = async () => {
        try {
            const response = await axios.get('http://localhost:8080/allComplaint');
            setComplaints(response.data);
        } catch (error) {
            console.error("Failed to load complaints:", error);
        }
    }
    const loadDemand = async () => {
        try {
            const response = await axios.get('http://localhost:8080/allDemands');
            setDemands(response.data);
        } catch (error) {
            console.error("Failed to load demands:", error);
        }
    }

    return (
        <>
            <div className="flex flex-col mt-8 overflow-y-scroll scrollbar-colored h-screen">
                <h1 className="font-semibold text-2xl mb-2">Demands</h1>
                {demands.length === 0 &&
                    <div className="m-auto flex flex-col items-center gap-3 ">
                        <img className="w-64 rounded-md" src="/src/assets/emptyHistory.jpg" />
                        <p className="font-bold text-xl">No Demands Yet!</p>
                    </div>
                }

                {demands.length > 0 &&
                    <div className="bg-white rounded-md p-5">
                        <table className="w-full px-5 table-fixed bg-[#f3f8f8] text-center rounded-md border-separate border-spacing-y-3">
                            <thead>
                            <tr>
                                <th className="w-[20%]">Title</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th className="w-[10%]">Status</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {demands.map(demand  => (
                                <tr key={demand.id}>
                                    <td>{demand.title}</td>
                                    <td>{new Date(demand.createdAt).toLocaleDateString("en-GB")}</td>
                                    <td>{demand.location}</td>
                                    <td className={`${!demand.status ? 'bg-red-300 text-red-800' : 'bg-green-400 text-green-900'}  font-black rounded-lg`}>{!demand.status ? "pending" : "resolved"}</td>
                                    <td className="space-x-1">
                                        <Link to={`/demandDetail/${demand.id}`}><Button className="bg-red-600 rounded-md text-white">Details</Button></Link>
                                        <Link to="#"><Button className="bg-blue-600 text-white rounded-md">Report</Button></Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                }

                <h1 className="font-semibold text-2xl mt-5 mb-2">Complaints</h1>
                {complaints.length === 0 &&
                    <div className="m-auto flex flex-col items-center gap-3 ">
                        <img className="w-64 rounded-md" src="/src/assets/emptyHistory.jpg" />
                        <p className="font-bold text-xl">No Complaints Yet!</p>
                    </div>
                }

                {complaints.length > 0 &&
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
                            {complaints.map(complaint  => (
                                <tr key={complaint.id}>
                                    <td>{complaint.title}</td>
                                    <td>{new Date(complaint.createdAt).toLocaleDateString("en-GB")}</td>
                                    <td>{complaint.type}</td>
                                    <td className={`${!complaint.status ? 'bg-red-300 text-red-800' : 'bg-green-400 text-green-900'}  font-black rounded-lg`}>{!complaint.status ? "pending" : "resolved"}</td>
                                    <td className="space-x-1">
                                        <Link to={`/complaintDetail/${complaint.id}`}><Button className="bg-red-600 rounded-md text-white">Details</Button></Link>
                                        <Link to="#"><Button className="bg-blue-600 text-white rounded-md">Report</Button></Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                }

            </div>
        </>
    )
}

export default SubmissionsMain;