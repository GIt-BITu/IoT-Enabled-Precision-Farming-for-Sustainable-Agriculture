import React from "react";
import Button from "@/component/Button.jsx";
import Input from "@/component/Dashboards/Farmer/Common/Input.jsx";

function Complaint() {

        return (
            <>
                <div className="w-[70%] h-[85%] bg-white shadow rounded-md overflow-hidden m-auto flex items-center">
                    <div className="text-center flex gap-3 flex-col px-2 justify-center items-center w-1/2 h-full bg-[url('/src/assets/comp.jpg')] bg-center bg-cover"
                    >
                        <h1 className="text-3xl  font-black">Need Help? Submit a Complaint</h1>
                        <p className="font-semibold">If you encounter any issues related to your sensors, actuators, or any aspect of the
                            AgriBloom system, please let us know. Your feedback is important to us and helps improve the
                            quality of our services. Fill out the form with as much detail as possible, and our
                            technical team will review and respond promptly.</p>
                    </div>
                    <div className="w-1/2 h-full flex flex-col p-5 bg-white">
                        <h1 className="text-3xl font-bold text-center">Complaint Form</h1>
                        <form className="flex flex-col gap-5 my-5">
                            <Input className="bg-[#f3f8f8] p-2 rounded-md outline-none" type="text" placeholder="Title" />
                            <Input className="bg-[#f3f8f8] p-2 rounded-md outline-none" type="text" placeholder="Type" />
                            <textarea  className="bg-[#f3f8f8] p-2 rounded-md resize-none h-64 outline-none" placeholder="Description..." />
                        </form>
                        <div className="flex justify-end">
                            <Button className="bg-[#152a1b] rounded-md text-white font-semibold hover:opacity-85">Submit</Button>
                        </div>
                    </div>
                </div>
            </>
        )

}

export default Complaint;