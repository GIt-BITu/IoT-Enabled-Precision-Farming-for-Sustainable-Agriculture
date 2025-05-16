import React from "react" ;
import {ListCard} from "@/component/Dashboards/Farmer/data.jsx";
function Card(){
     const cardItem= ListCard.map(item =>
         (
        <div key={item.index} className="rounded-xl flex-col  justify-center shadow w-[330px] space-y-3 pb-5 hover:scale-[1.04] transition-transform duration-200 ease-linear">
            <div >
                <img src={item.img} className="rounded-t-xl" alt=""/>
            </div>
            <div className="text-lg font-bold px-5">
                <h1>{item.title}</h1>
            </div>
            <div className="px-2 font-semibold">
                <p>{item.description}</p>
            </div>
        </div>
         )

     )
    return(
        <>
            <div className="flex-col mt-30">
                <h1 className="uppercase text-[40px] tex-black font-bold text-center">quick view</h1>
                <div className="flex justify-around items-center my-16">
                    {cardItem}
                </div>
            </div>

        </>
    )
}

export default Card;
