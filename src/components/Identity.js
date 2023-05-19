import React from 'react';
import './IdentityStyles.css';
import { Link } from 'react-router-dom';

function SenderIdentityForm() {
  return (
    <div className="identity-form-container">
    <form className="identity-form">
      <h2>Sender Sign In</h2>
      <p>Welcome to Shipmate! Sign in with your email and password below.</p>
      <input placeholder="Email Adress" type="email" id="email" name="email" />
      <input placeholder="Password" type="password" id="password" name="password" />
      <Link to="/dashboard">Sign In</Link>
      <p>New To Shipmate?<Link to="/signupSender" className='crt-link'>Create An Account!</Link></p>
    </form>
    </div>
  );
}
function TravellerIdentityForm() {
  return (
    <div className="identity-form-container">
    <form className="identity-form">
      <h2>Traveller Sign In</h2>
      <p>Welcome to Shipmate! Sign in with your email and password below.</p>
      <input placeholder="Email Adress" type="email" id="email" name="email" />
      <input placeholder="Password" type="password" id="password" name="password" />
      <Link to="/dashboard" className="formButton">Sign In</Link>
     <p>New To Shipmate?<Link to="/signupTraveller" className='crt-link'>Create An Account!</Link></p>
    </form>
    </div>
  );
}

const IdentityForm = {
  sender: SenderIdentityForm,
  traveller: TravellerIdentityForm
}
export default IdentityForm;