import React from "react";
import Button from "@/component/Button.jsx";

function Evaluation(){
    return(
        <>
            <div className="w-[70%] h-[85%] bg-white shadow rounded-md overflow-hidden m-auto flex items-center">
                <div className="text-center flex gap-3 flex-col px-2 justify-center items-center w-1/2 h-full bg-[url('/src/assets/comp.jpg')] bg-center bg-cover"
                >
                    <h1 className="text-3xl  font-black">Share Your Experience</h1>
                    <p className="font-semibold">Your feedback helps us grow. Let us know how your experience with
                        AgriBloom has been—what you loved, what could be improved, and anything else you'd like to
                        share. Rate your experience and leave a short review to help us serve you better.
                    </p>
                </div>
                <div className="w-1/2 h-full flex flex-col  p-5 bg-white">
                    <h1 className="text-3xl font-bold text-center">Evaluation Form</h1>
                    <form className="flex flex-col gap-5 my-5">
                        <textarea  className="bg-[#f3f8f8] p-2 rounded-md resize-none h-72 outline-none" placeholder="Feedback..." />
                    </form>
                    <div className="flex justify-center items-center text-3xl gap-5 my-2">
                        <i className="fa-solid fa-star hover:text-yellow-300"></i>
                        <i className="fa-solid fa-star hover:text-yellow-300"></i>
                        <i className="fa-solid fa-star hover:text-yellow-300"></i>
                        <i className="fa-solid fa-star hover:text-yellow-300"></i>
                        <i className="fa-solid fa-star hover:text-yellow-300"></i>
                    </div>
                    <div className="flex justify-end mt-10">
                        <Button className="bg-[#152a1b] rounded-md text-white font-semibold hover:opacity-85">Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Evaluation;