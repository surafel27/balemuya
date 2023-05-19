import { Routes } from "react-router-dom";
import './App.css';
import { Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Service from "./pages/Service.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Login from "./pages/Login"
import SignupSender from "./pages/SignupSender";
import SignupTraveller from "./pages/SignUpTraveller";
import Identity from "./pages/Identity"
import Dashboard from "./pages/Dashboard";
function App() {
  const SenderIdentityForm = Identity.sender;
  const TravellerIdentityForm = Identity.traveller;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/senderIdentity" element={<SenderIdentityForm/>}></Route>
        <Route path="/travellerIdentity" element={<TravellerIdentityForm/>}></Route>
        <Route path="/signupSender" element={<SignupSender/>}></Route>
        <Route path="/signupTraveller" element={<SignupTraveller/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
