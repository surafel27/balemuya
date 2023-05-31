import React from 'react';
import Headers from "../components/Header"
import Sidebar from '../components/Sidebar';
import PackageRequestForm from '../components/PackageRequest';
import PackageRequest from '../components/Card.js';
import CardWellCome from '../components/WellcomCard.js';

function SenderDashboard () {
    const HeaderDashboard = Headers.headerDashboard;
    return(
        <>
        <HeaderDashboard/>
        <Sidebar/>
        <CardWellCome />
        <PackageRequest/>
        </>
    );
}
function TravellerDashboard (){
    const Header = Headers.headerDashboard;
    return(
        <>
        <Header/>
        <Sidebar />
        <CardWellCome />
        <PackageRequestForm/>
        </>
    );
}
const myDashboard = {
    sender: SenderDashboard,
    traveller: TravellerDashboard
}
export default myDashboard;