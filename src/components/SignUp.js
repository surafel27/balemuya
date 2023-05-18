import React from 'react';
import './SignUpStyles.css';
import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <div className="signup-form-container">
    <form className="signup-form">
      <h2>Create An Account!</h2>
      <input placeholder="Full Name" type="text" id="fullName" name="fullName" />
      <input placeholder="+2519********" type="text" id="phoneNumber" name="phoneNumber"/>
      <input placeholder="E-mail" type="email" id="email" name="email" />
      <input placeholder="password" type="password" id="password" name="password" />
      <button type="submit">Submit</button>
      <Link to="/identity" className="link-button">I already have an account.</Link>
    </form>
    </div>
  );
}

export default SignupForm;