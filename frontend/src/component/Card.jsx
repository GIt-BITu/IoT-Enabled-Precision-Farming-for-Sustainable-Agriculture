import React from "react" ;
import installation from "/src/assets/installation.png";
import controlling from "/src/assets/controlling2.png"
import monitoring from "/src/assets/monitoring3.jpg"
const ListCard=[
    {
        img: monitoring, title :"Monitoring" , description :"For an accurate information, our devices send the clearest data ,concerning your grains,appropriately in which a farmer is getting monitoring his greenhouse.", index :1
    },
    {
        img:controlling, title :"Controlling " , description : "Through AgriBloom ,you can flexibly control your devices without hindrance nor problems. with a friendly use you are capable of utilizing our products safely.", index :2
    },
    {
        img:installation , title :"Set up " , description :"Once you are part of our company we provide the best technicians who can help to install your needed devices in order to modernize your greenhouse ", index :3
    }
]
function Card(){
     const cardItem= ListCard.map(item =>
         (
        <div key={item.index} className="rounded-xl flex-col  justify-center shadow mt-20 w-[330px] space-y-3 pb-5 hover:scale-[1.04] transition-transform duration-200 ease-linear">
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
            <div className="flex justify-around items-center my-2 ">
                {cardItem}
            </div>
        </>
    )
}
export default Card;
