import React from 'react';
import './SignUpStyles.css';
import { Link } from 'react-router-dom';

function SignupSenderForm() {
  return (
    <>
    <div className="signup-form-container-sender">
    <div className="signup-form-info">
      <h2>Sign up is FREE. Delivery is easy!</h2>
      <ul>
        <li>Save time by creating deliveries</li>
        <li>SEND YOUR ITEMS SWIFTLY AND SAFELY.</li>
        <li>Track your package.</li>
        <li>Join for FREE with zero obligation</li>
      </ul>
    </div>
    <form className="signup-form">
      <h2>Create Sender Account!<br></br>Post deliveries in minutes.</h2>
      <input placeholder="Full Name" type="text" id="fullName" name="fullName" />
      <input placeholder="+2519********" type="text" id="phoneNumber" name="phoneNumber"/>
      <input placeholder="E-mail" type="email" id="email" name="email" />
      <input placeholder="password" type="password" id="password" name="password" />
      <button type="submit">Create Account</button>
      <Link to="/senderIdentity" className="link-button">I already have an account.</Link>
    </form>
    </div>
    </>
  );
}
function SignupTravellerForm() {
  return (
    <div className="signup-form-container-traveller">
    <form className="signup-form">
      <h2>Create Traveller Account!<br></br>Make money on the way.</h2>
      <input placeholder="Full Name" type="text" id="fullName" name="fullName" />
      <input placeholder="+2519********" type="text" id="phoneNumber" name="phoneNumber"/>
      <input placeholder="E-mail" type="email" id="email" name="email" />
      <input placeholder="password" type="password" id="password" name="password" />
      <button type="submit">Create Account</button>
      <Link to="/travellerIdentity" className="link-button">I already have an account.</Link>
    </form>
    </div>
  );
}

const signUp = {
  sender: SignupSenderForm,
  traveller: SignupTravellerForm
};
export default signUp;