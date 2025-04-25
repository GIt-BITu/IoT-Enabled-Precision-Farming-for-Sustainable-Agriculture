import NavBar from "/src/component/NavBar.jsx" ;
import Greenhouse from "/src/assets/green.png"
import Button from "@/component/Button.jsx";
import Card from "/src/component/Card.jsx";
import Footer from "/src/component/Footer.jsx";



function LandingHome(){
    return(
        <>
            <NavBar />
            <div className="bg-[url('/src/assets/green.png')] w-[100%] h-screen bg-center bg-cover bg-no-repeat flex
             items-center"   >


                <div className="flex-col space-y-4 pl-32 max-w-[800px] ">
                    <h1 className="text-white text-[42px] font-bold">Make Your Greenhouse Futuristic</h1>
                    <p className="text-white text-xl font-semibold leading-8">For An up-to-date greenhouse, AgriBloom Board provides the best technologies through which both of controlling and monitoring are possible to be integrated within your greenhouse.  </p>
                    <Button className="bg-indigo-600 mt-3 hover:bg-indigo-700">Get started</Button>
                </div>
            </div>
                <Card />
                <Footer />

        </>

    )

}

export default LandingHome;