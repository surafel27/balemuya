import React from 'react';
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js"
//import Landing_page from "../assets/landing_page1.svg"
import Destination from "../components/Destination.js";
import Recent from "../components/Recent.js";
import Footer from "../components/Footer.js";
function About (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid"
       // heroImg= {Landing_page}
        heroImg="https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        title="About"
        btnClass="hide"/>
        <Destination />
        <Recent />
        <Footer />
        </>
    );

}
export default About;