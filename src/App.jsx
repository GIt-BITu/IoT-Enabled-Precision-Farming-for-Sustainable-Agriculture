import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function Home(){
 return <h1>this is home page</h1>;
}

function About(){
  return <h1>this is about page</h1>;
}

function App() {
  return (
    <>
        <Router>
            <nav className="space-x-4">
                <Link to="/">home</Link>
                <Link to="/about">about us</Link>
            </nav>

            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
