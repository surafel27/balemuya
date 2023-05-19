import IdentityForm from "../components/Identity";
import Header from "../components/Header"

function SenderIdentity (){
   const SenderIdentityForm = IdentityForm.sender
    return(
        <>
        <Header/>
        <SenderIdentityForm/>
        </>
    );
}
function TravellerIdentity (){
   const TravellerIdentityForm = IdentityForm.traveller
    return(
        <>
        <Header/>
        <TravellerIdentityForm/>
        </>
    );

}
const Identity = {
    sender: SenderIdentity,
    traveller: TravellerIdentity
}
export default Identity;