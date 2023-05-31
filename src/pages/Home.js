import React from 'react';
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js"
import Destination from "../components/Destination.js";
import Recent from "../components/Recent.js";
import Footer from "../components/Footer.js";
function Home (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        title="Connect To Balemuya"
        article="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        text="choose the best empoyee for your company!"
        buttonText="Find Balemuya"
        url="/"
        btnClass="show"/>
        <Destination />
        <Recent />
        <Footer />
        </>
    );
}
export default Home;