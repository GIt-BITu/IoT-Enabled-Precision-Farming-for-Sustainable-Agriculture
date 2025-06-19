import React, {useState} from 'react'
import Button from "@/component/Button.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function DemandInstallation() {

    const[demand, setDemand] = useState({
        title: "",
        location: "",
        description: "",
        tempSensor: false,
        irrigationSensor: false,
        lightSensor: false,
        tempActuator: false,
        irrigationActuator: false,
        lightActuator: false
    });

    const navigate = useNavigate();

    const farmerId = 2;

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setDemand(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const anySelected = demand.tempSensor || demand.irrigationSensor || demand.lightSensor ||  demand.tempActuator || demand.irrigationActuator || demand.lightActuator;

        if (!anySelected) {
            alert("Please select at least one sensor or actuator.");
            return;
        }

        try {
            await axios.post(
                `http://localhost:8080/createDemand/${farmerId}`,
            demand
        );
            alert("Demand submitted successfully!");
            setDemand({
                title: "",
                location: "",
                description: "",
                tempSensor: false,
                irrigationSensor: false,
                lightSensor: false,
                tempActuator: false,
                irrigationActuator: false,
                lightActuator: false
            })
            navigate("/submissions");
        } catch (error) {
            console.error("Error submitting demand:", error);
            alert("Something went wrong. Please try again.");
        }
    };


    return (
        <>
            <div className="w-[70%] h-[85%] bg-white shadow rounded-md overflow-hidden m-auto flex items-center">
                <div className="text-center flex gap-3 flex-col px-2 justify-center items-center w-1/2 h-full bg-[url('/src/assets/comp.jpg')] bg-center bg-cover"
                >
                    <h1 className="text-3xl  font-black">Request a Sensor/Actuator Installation</h1>
                    <p className="font-semibold">Need to install sensors or actuators like temperature, lighting, or
                        irrigation devices? Fill out the form to request an installation. Our technical team
                        will review your request and contact you for the next steps.</p>
                </div>
                <div className="w-1/2 h-full flex flex-col p-5 bg-white">
                    <h1 className="text-3xl font-bold text-center">Installation Form</h1>
                    <form className="flex flex-col gap-5 my-5" onSubmit={handleSubmit}>
                        <input
                            name="title"
                            className="bg-[#f3f8f8] p-2 rounded-md outline-none"
                            type="text"
                            value={demand.title}
                            onChange={handleChange}
                            placeholder="Title"
                            required
                        />
                        <input
                            name="location"
                            className="bg-[#f3f8f8] p-2 rounded-md outline-none"
                            type="text"
                            value={demand.location}
                            onChange={handleChange}
                            placeholder="Location"
                            required
                        />
                        <div className="flex justify-around">
                            <div className="flex flex-col gap-3">
                                <h1>Sensors</h1>
                                <div className="flex items-center gap-1">
                                    <input
                                        className="h-4 w-4 "

                                        type="checkbox"
                                        name="tempSensor"
                                        id="tempSens"
                                        checked={demand.tempSensor}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="tempSens">Temperature</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        className="h-4 w-4 "
                                        type="checkbox"
                                        name="irrigationSensor"
                                        id="irrSens"
                                        checked={demand.irrigationSensor}
                                        onChange={handleChange}

                                    />
                                    <label htmlFor="irrSens">Irrigation</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        className="h-4 w-4 "
                                        type="checkbox"
                                        name="lightSensor"
                                        id="lightSens"
                                        checked={demand.lightSensor}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="lightSens">Light</label>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1>Actuators</h1>
                                <div className="flex items-center gap-1">
                                    <input
                                        className="h-4 w-4 "
                                        type="checkbox"
                                        name="tempActuator"
                                        id="tempAct"
                                        checked={demand.tempActuator}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="tempAct">Temperature</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        className="h-4 w-4 "
                                        type="checkbox"
                                        name="irrigationActuator"
                                        id="irrAct"
                                        checked={demand.irrigationActuator}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="irrAct">Irrigation</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <input
                                        className="h-4 w-4 "
                                        type="checkbox"
                                        name="lightActuator"
                                        id="lightAct"
                                        checked={demand.lightActuator}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="lightAct">Light</label>
                                </div>
                            </div>
                        </div>
                        <textarea name="description" value={demand.description} onChange={handleChange} className="bg-[#f3f8f8] p-2 rounded-md resize-none h-28 outline-none" placeholder="Description..." />

                        <div className="flex justify-end">
                            <Button type="submit" className="bg-[#152a1b] rounded-md text-white font-semibold hover:opacity-85">Submit</Button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default DemandInstallation;