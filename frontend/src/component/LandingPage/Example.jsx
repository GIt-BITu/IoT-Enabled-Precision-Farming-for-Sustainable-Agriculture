import React, {useEffect, useState} from 'react';
import Button from "@/component/Button.jsx";
import {Cards} from "@/component/Dashboards/Farmer/data.jsx";


function Example(){
    const [currentIndex, setCurrentIndex] = useState(0);

    function nextSlide(){
        setCurrentIndex(prev =>  (prev+1) % Cards.length);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    function prevSlide(){
        setCurrentIndex(prev =>  (prev-1 + Cards.length) % Cards.length);
    }
    return (
        <>
            <div className="w-full h-screen overflow-hidden p-16 ">
                <h1 className="text-center text-[40px] uppercase font-black mb-10">Some of our customer's greenhouses</h1>
                <div className="flex h-full rounded-[12px] shadow-indigo-600 shadow bg-white overflow-hidden" >
                    <div className={`px-10 ${currentIndex % 2 === 0 ? 'bg-indigo-600' : 'bg-blue-950'} w-1/2 h-full flex items-center`}>
                        <div className="flex-col space-y-3 justify-center text-white">
                            <h1 className="text-4xl">{Cards[currentIndex].title}</h1>
                            <p>{Cards[currentIndex].description}</p>
                            <Button className={`${currentIndex % 2 !== 0 ? 'bg-indigo-600' : 'bg-blue-950'} text-white font-bold text-md rounded-md`}>Show More</Button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="bg-cover">
                            <img src={Cards[currentIndex].img} alt="picture"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-5 relative">
                    <button className="bg-blue-950 p-2 font-bold text-md rounded-full flex items-center justify-center cursor-pointer text-white absolute -top-72 -left-12"
                            onClick={prevSlide}><span className="material-symbols-outlined">chevron_left</span></button>
                    <button
                        className="bg-indigo-600 p-2 font-bold text-md rounded-full flex items-center justify-center cursor-pointer text-white absolute -top-72 -right-12" onClick={nextSlide}><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
            </div>
        </>
    )
}

export default Example;