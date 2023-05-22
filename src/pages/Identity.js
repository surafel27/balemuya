import IdentityForm from "../components/Identity";
import Headers from "../components/Header"

function SenderIdentity (){
    const Header = Headers.header;
   const SenderIdentityForm = IdentityForm.sender
    return(
        <>
        <Header/>
        <SenderIdentityForm/>
        </>
    );
}
function TravellerIdentity (){
    const Header = Headers.header;
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