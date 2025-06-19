import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Button from "@/component/Button.jsx";

function ComplaintDetails() {

    const [complaint, setComplaint] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchComplaint = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/complaintDetail/${id}`);
                setComplaint(res.data);
            } catch (err) {
                console.error("Error fetching complaint:", err);
            }
        };

        fetchComplaint();
    }, [id]);


    return (
        <>
            <div className="flex justify-center items-center h-full">
                <div key={complaint.id} className="flex flex-col gap-5 bg-white p-5 rounded-md">
                    <p><strong>Title:</strong> {complaint.title}</p>
                    <p><strong>Type:</strong> {complaint.type}</p>
                    <p className="max-w-[500px]"><strong>Description:</strong> {complaint.description}</p>
                    <p ><strong>Created at:</strong> {new Date(complaint.createdAt).toLocaleDateString()}</p>
                    <p><strong>Status:</strong> <span className={`${!complaint.status ? 'bg-red-300 text-red-800' : 'bg-green-400 text-green-900'}  w-[10%] p-2 font-black rounded-lg`}>{!complaint.status ? "pending" : "resolved"}</span></p>
                    <Link to="/submissions" className="flex justify-end">
                        <Button className="bg-[#152a1b] rounded-md text-white font-semibold hover:opacity-85">Back</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ComplaintDetails;