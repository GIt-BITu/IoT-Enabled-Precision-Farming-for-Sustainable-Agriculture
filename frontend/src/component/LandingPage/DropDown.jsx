import React from "react";
import { Link } from "react-router-dom";

function DropDown({ items, visible }) {
    return (
        <div>
            <ul
                className={`flex-col justify-center items-center bg-white p-2 space-y-2 rounded-md shadow absolute top-[160%] left-0 duration-200 transition-all ease-linear ${
                    !visible ? "hidden" : ""
                }`}
            >
                {items.map((item, i) => (
                    <li
                        key={item.id || item.path || i}
                        className="rounded-md text-black hover:text-white hover:bg-indigo-600 p-1 text-[16px]"
                    >
                        <Link to={item.path}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DropDown;
