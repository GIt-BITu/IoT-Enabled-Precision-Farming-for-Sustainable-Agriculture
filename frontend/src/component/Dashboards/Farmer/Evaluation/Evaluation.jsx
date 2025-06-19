import React, {useState} from "react";
import Button from "@/component/Button.jsx";
import axios from "axios";

function Evaluation(){

    const[rate, setRate] = useState(0);
    const [hover, setHover] = useState(0);
    const[evaluation, setEvaluation] = useState({
        description: "",
        startNumber: ""
    });

    const farmerId = 2;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvaluation(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (rate === 0) {
            alert("Please provide a star rating");
            return;
        }

        try {
            await axios.post(
                `http://localhost:8080/createEvaluation/${farmerId}`,
            {
            ...evaluation,
                starNumber: rate
            }
        );
            alert("Evaluation submitted successfully!");
            setEvaluation({ description: "" , startNumber: 0});
            setRate(0);
        } catch (error) {
            console.error("Error submitting evaluation:", error);
            alert("Something went wrong. Please try again.");
        }
    };

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
                    <form className="flex flex-col gap-5 my-5" onSubmit={handleSubmit}>
                        <textarea
                            className="bg-[#f3f8f8] p-2 rounded-md resize-none h-[310px] outline-none"
                            placeholder="Feedback..."
                            name="description"
                            value={evaluation.description}
                            onChange={handleChange}
                            required
                        />
                        <div className="flex justify-center items-center text-3xl gap-5 my-2">
                            {[...Array(5)].map((_, index) =>{
                                const currentRate = index + 1;
                                return(
                                    <label key={currentRate}>
                                        <input
                                            type="radio"
                                            name="rate"
                                            value={currentRate}
                                            className="hidden"
                                            onClick={() => setRate(currentRate)}
                                        />
                                        <i onMouseEnter={() => setHover(currentRate)}
                                           onMouseLeave={() => setHover(0)}
                                           className={`fa-solid fa-star transition cursor-pointer duration-200 ease-in-out ${currentRate <= (hover || rate) ? 'text-yellow-300' : 'text-[#e1e1e1]'}`}></i>
                                    </label>
                                );
                            })}
                        </div>
                        <div className="flex justify-end">

                            <Button type="submit" className="bg-[#152a1b] rounded-md text-white font-semibold hover:opacity-85">Submit</Button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Evaluation;