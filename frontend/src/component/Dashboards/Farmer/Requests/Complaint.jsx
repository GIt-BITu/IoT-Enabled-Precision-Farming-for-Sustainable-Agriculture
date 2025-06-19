import React, {useState} from "react";
import Button from "@/component/Button.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Complaint() {

    const[complaint, setComplaint] = useState({
        title: "",
        type: "",
        description: ""
    });

    const navigate = useNavigate();

    const farmerId = 2;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setComplaint(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                `http://localhost:8080/createComplaint/${farmerId}`,
                complaint
        );
            alert("Complaint submitted successfully!");
            setComplaint({ title: "", type: "", description: "" });
            navigate("/submissions");
        } catch (error) {
            console.error("Error submitting complaint:", error);
            alert("Something went wrong. Please try again.");
        }
    };

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
                    <form className="flex flex-col gap-5 my-5" onSubmit={handleSubmit}>
                        <input
                            name="title"
                            value={complaint.title}
                            onChange={handleChange}
                            className="bg-[#f3f8f8] p-2 rounded-md outline-none"
                            type="text"
                            placeholder="Title"
                            required
                        />
                        <input
                            name="type"
                            value={complaint.type}
                            onChange={handleChange}
                            className="bg-[#f3f8f8] p-2 rounded-md outline-none"
                            type="text"
                            placeholder="Type"
                            required
                        />
                        <textarea
                            name="description"
                            value={complaint.description}
                            onChange={handleChange}
                            className="bg-[#f3f8f8] p-2 rounded-md resize-none h-64 outline-none"
                            placeholder="Description..."
                            required
                        />
                        <div className="flex justify-end">
                            <Button type="submit" className="bg-[#152a1b] rounded-md text-white font-semibold hover:opacity-85">Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Complaint;