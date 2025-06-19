import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import Button from "@/component/Button.jsx";
import axios from "axios";

function Monitoring(){
    const[greenhouse, setGreenhouse] = useState([]);

    useEffect(() => {
        loadGreenhouse();
    }, [])

    const loadGreenhouse = async () => {
        try {
            const response = await axios.get('http://localhost:8080/AllGreenhouse');
            setGreenhouse(response.data);
        }catch(error) {
            console.log('Error', error);
        }
    }


    return (
        <>
            <div className="flex flex-col gap-6">
                <h1 className="font-bold text-2xl">Installed Greenhouses</h1>
                <div className=" bg-white flex shadow p-5 rounded-md gap-4">
                    <div className="w-full bg-[#f3f8f8] flex flex-col gap-5 rounded-md p-5">
                        {greenhouse.length === 0 &&
                            <div className="flex flex-col items-center gap-3">
                                <img className="w-60" src="/src/assets/emptyHistory.jpg" />
                                <Link to="/installation"><Button className="bg-[#152a1b] text-white rounded-full hover:opacity-85"><i className="fa-solid fa-plus"></i></Button></Link>
                            </div>
                        }
                        {greenhouse.length > 0 &&
                            greenhouse.map((item) => (
                                <div className="flex items-center justify-end gap-5">
                                    <Link to={`/dashboard/${item.id}`} key={item.id}>
                                        <Button className="bg-[#152a1b] text-white rounded-md font-semibold hover:opacity-85">{item.location}</Button>
                                    </Link>
                                    <Link to="/installation">
                                        <Button className="bg-[#152a1b] text-white rounded-full hover:opacity-85"><i className="fa-solid fa-plus"></i></Button>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Monitoring;