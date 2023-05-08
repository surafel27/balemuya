import { Routes } from "react-router-dom";
import './App.css';
import { Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Service from "./pages/Service.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Signup from "./pages/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
