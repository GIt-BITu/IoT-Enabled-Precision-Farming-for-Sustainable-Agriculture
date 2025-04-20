import React, {useState} from "react";
import logo from "../assets/Logo AB.png";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import DropDown from "./DropDown.jsx";
import Button from "./Button.jsx";
 const LinkList = [
     {
         path : "/",  title: "Home", dropdown:[], index : 1
     },
     {
         path: "", title: "Products" ,index : 2, dropdown: [
             {
                 path :"/temperature" , title :"Temperature"
             },
             {
                 path :"/light" , title :"Light"
             },

             {
                 path :"/irrigation" , title :"Irrigation"
             }

         ]
     },
     {
         path: "", title: "Services", index : 3 ,dropdown: [
             {
                 path :"/aboutUs" , title :"About Us"
             },
             {
                 path :"/Support" , title :"Support"
             },

             {
                 path :"/Guide" , title :"Guide"
             },
             {
                 path :"/Installation", title: "Installation"
             }
         ]
     },

     {
         path: "" , title: "Solutions",index : 4, dropdown: [
             {
                 path :"/Monitoring" , title: "Monitoring"
             },
             {
                 path :"/Controlling" , title: "Controlling"
             }
             ]
     },
     {
         path: "/Contact Us", title: "Contact Us", index: 5,dropdown: []


     }



 ];

function NavBar() {
        const [ActiveIndex,setActiveIndex] = useState(null);

        const linkItem= LinkList.map((item,i) =>{
            const isActive=ActiveIndex===i;
            return (
                <Link className="relative underline-before  justify-center items-center flex" key={item.index} to={item.path} onClick={()=> setActiveIndex(previousIndex=> (previousIndex===i ? null : i)) }  >

                    <span >{item.title}</span>
                    {
                        item.dropdown.length > 0 && <span className={`material-symbols-outlined transition-transform duration-200 ${ isActive && 'rotate-180' } ` }   >keyboard_arrow_down</span>

                    }
                    {

                        item.dropdown.length>0 && <DropDown items={item.dropdown} visible={isActive}/>
                    }



                </Link>
            )
        }


        )
    return (
        <>
            <div className=" flex justify-between px-2 bg-white shadow items-center" >
         <div className=" flex items-center justify-center gap-1.5 ml-12 cursor-pointer" >
            <img className="w-12  " src={logo} alt=""/>
             <h1 className="text-black text-[28px] font-bold"> Agri<span className=" text-indigo-600">Bloom</span></h1>
         </div>
         <div>
             <Router>
                 <nav  className=" flex  justify-center items-center space-x-7 text-[18px] relative">
                     {linkItem}
                 </nav>
             </Router>
         </div>

         <div className="flex-center space-x-3 mr-6">
            <Button className="bg-black hover:opacity-70">Sign Up</Button>
             <Button className="bg-indigo-600 hover:bg-indigo-700">Sign In</Button>
         </div>
        </div>

      </>


    )


}
export default NavBar;