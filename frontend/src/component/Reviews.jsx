import React from "react";
import client1 from '../assets/client1.jpg'
import client2 from '../assets/client2.jfif'
import client3 from '../assets/client3.jpg'
import client4 from '../assets/client4.jpg'


const reviewsList = [
    {name: "Abderraouf Boulakroune", review: "it was a really wonderfull experience i've had with AgriBloom", pic: client1},
    {name: "Bourbiaa Imed", review: "I've worked with AgriBloom and they really helped me a lot", pic: client2},
    {name: "Abdelmalek Anes", review: "AgriBloom is the best company that i've worked with!! really good experience", pic: client3},
    {name: "Elon Musk", review: "Thank you AgriBloom, you made my life easier!!", pic: client4},

]

function Reviews(){
    return (
        <>
            <div className=" w-full h-full my-28 overflow-hidden">
                <h1 className="text-center text-5xl font-bold">What Our Customers Say!</h1>
                <div className=" mt-20 flex items-center justify-center space-x-4">
                    {reviewsList.map((review, index) => (
                        <div key={index} className={`bg-indigo-600 ${index % 2 === 0 && 'animate-bounce bg-pink-600'} text-white shadow-md flex w-80 items-center justify-center p-4 space-y-4 flex-col rounded-[7px]`}>
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