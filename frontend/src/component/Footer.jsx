import React from "react";
import logo from "/src/assets/Logo AB.png"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";


const Contact= {
    email: "agribloomservi@gmail.com",
    phone: "+213 570 55 34 29"
}
const List1=[
    {
        path:"/aboutUs" , name :"About us"
    },
    {
        path:"/SiteMap" , name :"Site map" , icon:"fa-solid fa-map"
    },
    {
        path:"/Support" , name :"Support"
    }
]
const List2=[
    {
        path:"/Products" , name :"Products" ,icon:""
    },
    {
        path:"/Monitoring" , name :"Monitoring",icon:"material-symbols-outlined"
    },
    {
        path:"/Controlling" , name :"Controlling"
    }
]
 const Home= {
    path:"/" , name :"Home" ,icon:"fa-solid fa-house"
}

 const SocialM= [
     {
         path: "/Github", icon: "fa-brands fa-github"
     },
     {
         path: "/WhatsUp", icon: "fa-brands fa-whatsapp"
     },
     {
         path: "/X", icon: "fa-brands fa-square-x-twitter"
     },
     {
         path: "/Facebook", icon: "fa-brands fa-facebook"
     }
 ]

function Footer() {

    const Flist = List1.map(item=>
            <li key={item.index}>
                <Link to={item.path}><span className="text-white">{item.name}</span></Link>
            </li>
    )
    const Slist = List2.map(item =>
            <li key={item.index}>
                <Link to={item.path}><span className="text-white">{item.name}</span></Link>
            </li>
    )
    const Media=SocialM.map(item=>
        <li key={item.index}>
            <Link to={item.path}><i className={`text-xl text-white ${item.icon}`}></i></Link>
        </li>
    )
    return(
        <>
        <footer className="justify-center items-center">
        <div className="flex items-center justify-between bg-blue-900">
            <div className="justify-center flex-col items-center ml-3 space-y-2">
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="rounded-full w-[50px] h-[50px] bg-slate-700 mt-2"  />
                    <h1 className="font-bold text-lg">AgriBloom</h1>
                </div>
                <Router>
                <div className=" flex-col justify-center space-y-1 ">
                    <h1 className="text-white">Follow us:</h1>
                    <ul className="flex justify-center items-center space-x-2 pb-2">{Media}</ul>
                </div>
                </Router>
            </div>

            <Router>
            <div className="flex items-center justify-around w-[70%] ">


                <Link to={Home.path} className="space-x-2 ">
                    <i className={`text-white ${Home.icon}`}></i>
                    <span className="text-white">{Home.name}</span>
                </Link>

                <ul className="space-y-4 py-4">
                        {Flist}
                    </ul>
                    <ul className="space-y-4 py-4">
                        {Slist}
                    </ul>
                </div>
            </Router>

        </div>
            <div className="flex-col justify-center items-center bg-slate-700 space-y-2">
                <div className="flex justify-center items-center space-x-3 pt-2">
                    <div className="flex space-x-2 justify-center items-center">
                       <i className="fa-solid fa-envelope text-white"></i>
                        <p className="text-white">{Contact.email}</p>
                    </div>
                    <div className="flex space-x-2 justify-center items-center">
                        <i className="fa-solid fa-phone text-white"></i>
                        <p className="text-white">{Contact.phone}</p>
                    </div>

                </div>

                <Router>
                    <div className="flex justify-center items-center space-x-3 pb-2">
                        <Link to="/Policy" className="text-white">Policy & terms</Link>
                        <p className=" text-white">｜</p>
                        <p className="text-white">
                            &copy; {new Date().getFullYear()} AgriBloom company
                        </p>
                    </div>
                </Router>
            </div>
        </footer>
        </>
    )

}

export default Footer;
