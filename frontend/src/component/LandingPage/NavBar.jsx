import React, { useState } from "react";
import logo from "../../assets/Logo AB.png";
import { Link, useNavigate } from "react-router-dom";
import DropDown from "./DropDown.jsx";
import Button from "../Button.jsx";
import { LinkList } from "@/component/Dashboards/Farmer/data.jsx";

function NavBar() {
    const [activeIndex, setActiveIndex] = useState(null);
    const navigate = useNavigate();

    const goToSignIn = () => {
        navigate("/signin");
    };

    const goToSignUp = () => {
        navigate("/signin/register");
    };

    const linkItems = LinkList.map((item, i) => {
        const isActive = activeIndex === i;

        return (
            <div
                key={item.id || item.path || i}
                className="relative flex items-center"
                onMouseLeave={() => setActiveIndex(null)}
            >
                <Link
                    className="relative underline-before justify-center items-center flex"
                    to={item.path}
                    onClick={() =>
                        setActiveIndex((prevIndex) =>
                            prevIndex === i ? null : i
                        )
                    }
                >
                    <span>{item.title}</span>
                    {item.dropdown.length > 0 && (
                        <span
                            className={`material-symbols-outlined transition-transform duration-200 ${
                                isActive ? "rotate-180" : ""
                            }`}
                        >
                            keyboard_arrow_down
                        </span>
                    )}
                </Link>

                {item.dropdown.length > 0 && (
                    <DropDown items={item.dropdown} visible={isActive} />
                )}
            </div>
        );
    });

    return (
        <div className="flex justify-between px-2 bg-white shadow items-center">
            <div className="flex items-center justify-center gap-1.5 ml-12 cursor-pointer">
                <img className="w-12" src={logo} alt="AgriBloom logo" />
                <h1 className="text-black text-[28px] font-bold">
                    Agri<span className="text-indigo-600">Bloom</span>
                </h1>
            </div>

            <nav className="flex justify-center items-center space-x-7 text-[18px] relative">
                {linkItems}
            </nav>

            <div className="flex-center space-x-3 mr-6">
                <Button
                    className="bg-black hover:opacity-70 text-white rounded-md"
                    onClick={goToSignUp}
                >
                    Sign Up
                </Button>
                <Button
                    className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                    onClick={goToSignIn}
                >
                    Sign In
                </Button>
            </div>
        </div>
    );
}

export default NavBar;
