import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function DropDown({items,visible}){
    const ListItem= items.map(item =>
        <li key={item.index} className=" rounded-md text-black hover:text-white hover:bg-indigo-600 p-1 text-[16px]" >
            <Link to={item.path}>
                {item.title}
            </Link>
        </li>
)
    return (
        <>
            <div>
                <ul className={` flex-col justify-center items-center bg-white p-2 space-y-2 rounded-md shadow absolute top-[160%] left-0 duration-200 transition-all ease-linear ${ !visible  && 'hidden'} `} >
                    {ListItem}
                </ul>


            </div>


        </>
        )


}
export default DropDown;


