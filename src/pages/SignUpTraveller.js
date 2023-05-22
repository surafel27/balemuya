import Headers from "../components/Header.js";
import signUp from "../components/SignUp.js";;
function Signup (){
    const Header = Headers.header;
    const SignupTravellerForm = signUp.traveller;
    return(
        <>
        <Header/>
        <SignupTravellerForm/>
        </>
    );

}
export default Signup;