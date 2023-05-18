import React from 'react';
import './IdentityStyles.css';
import { Link } from 'react-router-dom';

function IdentityForm() {
  return (
    <div className="identity-form-container">
    <form className="identity-form">
      <h2>Log In</h2>
      <input placeholder="E-mail" type="email" id="email" name="email" />
      <input placeholder="Password" type="password" id="password" name="password" />
      <Link to="/dashboard"><button className="formButton" type="submit">Log in</button></Link>
      <Link to="/signup"><button className="formButton" type="submit">Create An Account!</button> </Link>
    </form>
    </div>
  );
}

export default IdentityForm;