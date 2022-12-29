import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js"
import Landing_page from "../assets/creativity_re_.svg"
import Destination from "../components/Destination.js";
function Home (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg= {Landing_page}
        //heroImg="https://plus.unsplash.com/premium_photo-1670844568516-70751ae08b43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        title="Connect To Balemuya"
        text="choose the best empoyee for your company!"
        buttonText="Find Balemuya"
        url="/"
        btnClass="show"/>
        <Destination />
        </>
    );
}
export default Home;