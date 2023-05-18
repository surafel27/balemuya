import { Routes } from "react-router-dom";
import './App.css';
import { Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Service from "./pages/Service.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Signup from "./pages/Signup";
import Identity from "./pages/Identity"
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/identity" element={<Identity/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
