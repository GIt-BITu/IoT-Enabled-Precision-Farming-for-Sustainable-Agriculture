import React from 'react'

function DropDownNotification(){
    return (
        <>
            <div className="relative">
                <div className="absolute z-50 bg-white p-5 -right-6 top-5 w-96 rounded-md shadow flex flex-col items-center gap-7">
                    <div>
                        <img className="w-24 h-24 rounded-full" src="/src/assets/noNotif1.jpg" alt="icon"/>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="font-bold text-3xl">No Notifications Yet</h1>
                        <span className="text-center px-10 text-[16px] text-gray-400 leading-7">You have no notifications right now. Come back later</span>
                    </div>
                </div>
                <div className="w-11 h-11 bg-white shadow  absolute right-[-6px] top-1.5 rotate-[45deg]"></div>
            </div>
        </>
    )
}

export default DropDownNotification;