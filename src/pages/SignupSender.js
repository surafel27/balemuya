//import Hero from "../components/Hero.js";
//import Navbar from "../components/Navbar.js"
//import Landing_page from "../assets/landing_page1.svg"
import Header from "../components/Header.js";
import signUp from "../components/SignUp.js";
//import Footer from "../components/Footer.js";
function Signup (){
    const SignupSenderForm = signUp.sender;
    return(
        <>
        <Header/>
        <SignupSenderForm/>
        </>
    );

}
export default Signup;