import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import Button from "@/component/Button.jsx";

function MonitoringGreenhouse(){
    const [fetchedData, setFetchedData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/dashboard/${id}`);
                setFetchedData(res.data);
            } catch (err) {
                console.error("Error fetching complaint:", err);
            }
        };

        fetchData();
    }, [id]);


    const latestData = fetchedData.slice(-1);

    return (
        <>
            <div className="flex justify-center items-center h-full">
                {latestData.map(item => (
                    <div key={item.id} className="flex flex-col gap-5 bg-white p-5 rounded-md">
                        <p><strong>Data:</strong> {item.data}°C</p>
                        <p><strong>Type:</strong> {item.device.type}</p>
                        <p><strong>Role:</strong> {item.device.role}</p>
                        <Link to="/dashboard" className="flex justify-end">
                            <Button className="bg-[#152a1b] rounded-md text-white font-semibold hover:opacity-85">Back</Button>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MonitoringGreenhouse;