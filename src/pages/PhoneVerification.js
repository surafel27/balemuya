import React from 'react';
import MobileIdentityForm from "../components/PhoneVerify";
import Headers from "../components/Header"

function SenderMobileIdentity (){
    const Header = Headers.header;
   const SenderMobileIdentityForm = MobileIdentityForm.senderPhone
    return(
        <>
        <Header/>
        <SenderMobileIdentityForm/>
        </>
    );
}
function TravellerMobileIdentity (){
    const Header = Headers.header;
   const TravellerMobileIdentityForm = MobileIdentityForm.travellerPhone
    return(
        <>
        <Header/>
        <TravellerMobileIdentityForm/>
        </>
    );
}
const PhoneIdentity = {
    sender: SenderMobileIdentity,
    traveller: TravellerMobileIdentity
}
export default PhoneIdentity;