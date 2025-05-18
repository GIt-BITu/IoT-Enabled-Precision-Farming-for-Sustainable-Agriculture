import NavBar from "/src/component/LandingPage/NavBar.jsx" ;
import Button from "/src/component/Button.jsx";
import Card from "/src/component/LandingPage/Card.jsx"
import Footer from "/src/component/LandingPage/Footer.jsx"
import Example from "/src/component/LandingPage/Example.jsx"
import Reviews from "/src/component/LandingPage/Reviews.jsx"



function LandingHome(){
    return(
        <>
            <NavBar />
            <div className="bg-[url('/src/assets/green.png')] w-[100%] h-screen bg-center bg-cover bg-no-repeat flex
             items-center">
                <div className="flex-col space-y-4 pl-32 max-w-[800px] ">
                    <h1 className="text-white text-[42px] font-bold">Make Your Greenhouse Futuristic</h1>
                    <p className="text-white text-xl font-semibold leading-8">For An up-to-date greenhouse, AgriBloom Board provides the best technologies through which both of controlling and monitoring are possible to be integrated within your greenhouse.  </p>
                    <Button className="bg-indigo-600 mt-3 hover:bg-indigo-700 text-white rounded-md">Get started</Button>
                </div>
            </div>
                <Card />
                <Example />
                <Reviews />
                <Footer />
        </>
    )
}
export default LandingHome;