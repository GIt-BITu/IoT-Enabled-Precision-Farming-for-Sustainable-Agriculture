import React from 'react'
import Input from "@/component/Dashboards/Farmer/Common/Input.jsx";
import Button from "@/component/Button.jsx";

function DemandInstallation() {
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
                    <form className="flex flex-col gap-5 my-5">
                        <Input className="bg-[#f3f8f8] p-2 rounded-md outline-none" type="text" placeholder="Title" />
                        <div className="flex justify-around">
                            <div className="flex flex-col gap-3">
                                <h1>Sensors</h1>
                                <div className="flex items-center gap-1">
                                    <Input className="h-4 w-4 " type="checkbox" name="temperature" id="temp" />
                                    <label htmlFor="temp">Temperature</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Input className="h-4 w-4 " type="checkbox" name="irrigation" id="irr"/>
                                    <label htmlFor="irr">Irrigation</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Input className="h-4 w-4 " type="checkbox" name="light" id="light"/>
                                    <label htmlFor="temp">Light</label>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h1>Actuators</h1>
                                <div className="flex items-center gap-1">
                                    <Input className="h-4 w-4 " type="checkbox" name="temperature" id="temp" />
                                    <label htmlFor="temp">Temperature</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Input className="h-4 w-4 " type="checkbox" name="irrigation" id="irr"/>
                                    <label htmlFor="irr">Irrigation</label>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Input className="h-4 w-4 " type="checkbox" name="light" id="light"/>
                                    <label htmlFor="temp">Light</label>
                                </div>
                            </div>
                        </div>
                        <textarea  className="bg-[#f3f8f8] p-2 rounded-md resize-none h-44 outline-none" placeholder="Description..." />
                    </form>
                    <div className="flex justify-end">
                        <Button className="bg-[#152a1b] rounded-md text-white font-semibold hover:opacity-85">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DemandInstallation;