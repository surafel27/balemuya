import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Service from "./pages/Service.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Login from "./pages/Login"
import SignupSender from "./pages/SignupSender";
import SignupTraveller from "./pages/SignUpTraveller";
import Identity from "./pages/Identity"
import PhoneIdentity from"./pages/PhoneVerification"
import myDashboard from "./pages/Dashboard";
//import senderDashboard from "./pages/SenderDashboard";

function App() {
  const SenderIdentityForm = Identity.sender;
  const TravellerIdentityForm = Identity.traveller;
  const SenderMobileIdentity = PhoneIdentity.sender;
  const TravellerMobileIdentity = PhoneIdentity.traveller;
  const SenderLanding = myDashboard.sender;
  const TravellerLanding = myDashboard.traveller;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/account/sender/senderIdentity" element={<SenderIdentityForm/>}></Route>
        <Route path="/account/traveller/travellerIdentity" element={<TravellerIdentityForm/>}></Route>
        <Route path="/account/sender/verification" element={<SenderMobileIdentity/>}></Route>
        <Route path="/account/traveller/verification" element={<TravellerMobileIdentity/>}></Route>
        <Route path="/account/sender/signupSender" element={<SignupSender/>}></Route>
        <Route path="/account/traveller/signupTraveller" element={<SignupTraveller/>}></Route>
        <Route path="/user/traveller/dashboard" element={<TravellerLanding/>}></Route>
        <Route path="/user/sender/dashboard" element={<SenderLanding/>}></Route>
       
      </Routes>
    </div>
  );
}

export default App;
