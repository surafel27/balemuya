import React from 'react';
import './SignUpStyles.css';

function SignupForm() {
  return (
    <div className="signup-form-container">
    <form className="signup-form">
      <h2>Create an account</h2>
      <label htmlFor="name">Name:</label>
      <input placeholder="Full Name" type="text" id="name" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit">Sign up</button>
      <button type="submit">I already have account!</button>
    </form>
    </div>
  );
}

export default SignupForm;