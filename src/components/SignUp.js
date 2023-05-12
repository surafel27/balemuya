import React from 'react';
import './SignUpStyles.css';

function SignupForm() {
  return (
    <div className="signup-form-container">
    <form className="signup-form">
      <h2>Create An Account!</h2>
      <input placeholder="E-mail" type="email" id="email" name="email" />
      <input placeholder="password" type="password" id="password" name="password" />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default SignupForm;