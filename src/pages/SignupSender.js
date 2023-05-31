import React from 'react';
import Headers from "../components/Header.js";
import signUp from "../components/SignUp.js";
function Signup (){
    const Header = Headers.header;
    const SignupSenderForm = signUp.sender;
    return(
        <>
        <Header/>
        <SignupSenderForm/>
        </>
    );

}
export default Signup;