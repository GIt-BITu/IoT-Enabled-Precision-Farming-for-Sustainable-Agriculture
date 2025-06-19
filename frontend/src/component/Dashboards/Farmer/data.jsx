import img1 from "@/assets/greenhouse case.jpg";
import img2 from "@/assets/gren1.png";
import img3 from "@/assets/gren2.png";
import monitoring from "@/assets/monitoring3.jpg";
import controlling from "@/assets/controlling2.png";
import installation from "@/assets/installation.png";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jfif";
import client3 from "@/assets/client3.jpg";
import client4 from "@/assets/client4.jpg";

{/*Monitoring & Controlling components*/}
export const greenhouseActuators = [
    {
        title: 'Temperature',
        img: "/src/assets/thermometers.png",
        value : 0
    },
    {
        title: 'Lights',
        img: "/src/assets/microgreens.png",
        value : 0
    },
    {
        title: 'Irrigation',
        img: "/src/assets/sprinkler-irrigation.png",
        value : 0
    }
]

{/*FarmerDashboard component*/}
export const sideLinks = [
    {
        title: "Dashboard",
        icon: "fa-solid fa-house",
        path: "dashboard"
    },
    {
        title: "Controlling",
        icon: "fa-solid fa-gamepad",
        path: "controlling"
    },
    {
        title: "My Submissions",
        icon: "fa-solid fa-list-check",
        path: "submissions"
    },
    {
        title: "Evaluation",
        icon: "fa-solid fa-star",
        path: "evaluation"
    }
]

{/*DropDownProfile component*/}
export const items = [
    {
        title: "Setting",
        icon: "fa-solid fa-gear",
    },
    {
        title: "Log out",
        icon: "fa-solid fa-arrow-right-from-bracket",
    }
]

{/*Example component*/}
export const Cards = [
    {title: "Green house number one", description: "This is the desc of green house number one", img:img1},
    {title: "Green house number two", description: "This is the desc of green house number two", img:img2},
    {title: "Green house number three", description: "This is the desc of green house number three", img:img3}
]

{/*Card component*/}
export const ListCard=[
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

{/*NavBar component*/}
export const LinkList = [
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

{/*Reviews component*/}
export const reviewsList = [
    {name: "Abderraouf Boulakroune", review: "it was a really wonderfull experience i've had with AgriBloom", pic: client1},
    {name: "Bourbiaa Imed", review: "I've worked with AgriBloom and they really helped me a lot", pic: client2},
    {name: "Abdelmalek Anes", review: "AgriBloom is the best company that i've worked with!! really good experience", pic: client3},
    {name: "Elon Musk", review: "Thank you AgriBloom, you made my life easier!!", pic: client4},
]