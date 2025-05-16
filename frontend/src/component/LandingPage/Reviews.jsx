import React from "react";
import {reviewsList} from "@/component/Dashboards/Farmer/data.jsx";

function Reviews(){
    return (
        <>
            <div className=" w-full h-full my-28 overflow-hidden">
                <h1 className="text-center text-5xl font-bold">What Our Customers Say!</h1>
                <div className=" mt-20 flex items-center justify-center space-x-4">
                    {reviewsList.map((review, index) => (
                        <div key={index} className={` ${index % 2 === 0 ? 'animate-bounce bg-blue-950' : 'bg-indigo-600'} text-white shadow-md flex w-80 items-center justify-center p-4 space-y-4 flex-col rounded-[7px]`}>
                            <div className="w-20 h-20">
                                <img className="rounded-full" src={review.pic} alt="" />
                            </div>
                            <h1 className="text-xl font-bold">{review.name}</h1>
                            <div className="flex items-center justify-center gap-2">
                                <i className="fa-solid fa-star text-amber-300 text-lg"></i>
                                <i className="fa-solid fa-star text-amber-300 text-lg"></i>
                                <i className="fa-solid fa-star text-amber-300 text-lg"></i>
                                <i className="fa-solid fa-star text-amber-300 text-lg"></i>
                                <i className="fa-solid fa-star text-amber-300 text-lg"></i>
                            </div>
                            <p className="text-center">{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Reviews;