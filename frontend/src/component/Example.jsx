import React, {useEffect, useState} from 'react';
import img1 from '../assets/greenhouse case.jpg'
import img2 from '../assets/gren1.png'
import img3 from '../assets/gren2.png'


const Cards = [
    {title: "Green house number one", description: "This is the desc of green house number one", img:img1},
    {title: "Green house number two", description: "This is the desc of green house number two", img:img2},
    {title: "Green house number three", description: "This is the desc of green house number three", img:img3}

]

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
                    <div className={`px-10 ${currentIndex % 2 === 0 ? 'bg-indigo-600' : 'bg-pink-600'} w-1/2 h-full flex items-center`}>
                        <div className="flex-col space-y-3 justify-center text-white">
                            <h1 className="text-4xl">{Cards[currentIndex].title}</h1>
                            <p>{Cards[currentIndex].description}</p>
                            <button className={`${currentIndex % 2 !== 0 ? 'bg-indigo-600' : 'bg-pink-600'} p-2 font-bold text-md rounded-[8px] cursor-pointer`}>Show More</button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex items-center justify-center">
                        <div className="bg-cover">
                            <img src={Cards[currentIndex].img} alt="picture"/>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-5 relative">
                    <button className="bg-pink-600 p-2 font-bold text-md rounded-full flex items-center justify-center cursor-pointer text-white absolute -top-72 -left-12"
                            onClick={prevSlide}><span className="material-symbols-outlined">chevron_left</span></button>
                    <button
                        className="bg-indigo-600 p-2 font-bold text-md rounded-full flex items-center justify-center cursor-pointer text-white absolute -top-72 -right-12" onClick={nextSlide}><span className="material-symbols-outlined">chevron_right</span></button>
                </div>
            </div>
        </>
    )
}

export default Example;