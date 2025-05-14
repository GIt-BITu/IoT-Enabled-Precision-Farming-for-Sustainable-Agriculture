import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Button from "@/component/Button.jsx";

function Report() {
    const [reportData, setReportData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:9090/report/${id}`)
            .then(res => res.json())
            .then((data)=>{setReportData(data)})
            .catch((error)=> console.error("an error occurred",error))
    },[id])

    return (
        <>
            <div className="bg-blue-950 w-[calc(100%-275px)] flex-col justify-center items-center rounded-md p-2">
                <div className="bg-white flex flex-col items-center px-7 py-6 space-y-4 justify-center rounded-md mt-7">
                    <div>
                        <h1 className="text-blue-950 text-center font-semibold">{reportData.title}</h1>
                    </div>
                    <div>
                        <p1 className="text-blue-950 text-center ">{reportData.description}</p1>
                    </div>
                    <div>
                      <Link to={'/Completed-Tasks'}><Button className="text-white bg-blue-900 hover:bg-blue-950">return</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Report;