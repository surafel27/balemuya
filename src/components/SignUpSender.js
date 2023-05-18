import React from 'react';
import './SignUpSenderStyles.css';
import { Link } from 'react-router-dom';

function SignupSenderForm() {
  return (
    <div className="signup-form-container">
    <form className="signup-form">
      <h2>Create Sender Account!<br></br>Post deliveries in minutes.</h2>
      <input placeholder="Full Name" type="text" id="fullName" name="fullName" />
      <input placeholder="+2519********" type="text" id="phoneNumber" name="phoneNumber"/>
      <input placeholder="E-mail" type="email" id="email" name="email" />
      <input placeholder="password" type="password" id="password" name="password" />
      <button type="submit">Create Account</button>
      <Link to="/identity" className="link-button">I already have an account.</Link>
    </form>
    </div>
  );
}

export default SignupSenderForm;