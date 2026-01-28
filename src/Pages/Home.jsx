import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "./AboutPage.jsx";
import Products from "./ProductsPage.jsx";
import Contact from "./ContactPage.jsx";
import Footer from "../components/Footer.jsx";
import Services from "./ServicesPage.jsx";

const Home = () => {
    return (
        <div className="bg-gradient min-h-screen w-full">
            <Navbar />
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="products"><Products /></div>
            <div id="services"><Services /></div>
            <div id="contact"><Contact /></div>
            <Footer />
            
        </div>
    )
}

export default Home;