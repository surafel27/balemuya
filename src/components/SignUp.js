import React from 'react';
import './SignUpStyles.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';


function SignupSenderForm() {
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:4001/api/createSender/signup', {
        fullName,
        email,
        phoneNumber,
        password,
      }).then(res => {
        navigate('/account/sender/verification')
      });

      console.log(response.data); // Handle success response

      // Clear the form
      setfullName('');
      setemail('');
      setphoneNumber('');
      setpassword('');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error signing up'); // Handle error response
    }
  };

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
    <form onSubmit={handleSignup} className="signup-form">
      <h2>Create Sender Account!<br></br>Post deliveries in minutes.</h2>
      {error && <p>{error}</p>}
      <input placeholder="Full Name" type="text" id="fullName" 
      value={fullName}
      onChange={(e) => setfullName(e.target.value)}/>
      <input placeholder="+2519********" type="text" id="phoneNumber" 
      value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}/>
      <input placeholder="E-mail" type="email" id="email" 
       value={email}
       onChange={(e) => setemail(e.target.value)} />
      <input placeholder="password" type="password" id="password" 
       value={password}
       onChange={(e) => setpassword(e.target.value)}/>
      <button type="submit">Create Account</button>
      <Link to="/account/sender/senderIdentity" className="link-button">I already have an account.</Link>
    </form>
    </div>
    </>
  );
}


function SignupTravellerForm() {
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 // const [error, setError] = useState('');
 const navigate = useNavigate();

  const handleSignupTraveller = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:4001/api/createTraveller/signupTraveller', {
        fullName,
        email,
        phoneNumber,
        password
      }).then(res => {
           navigate('/account/traveller/verification');
      });
      console.log(response.data); // Handle success response

      // Clear the form
      setfullName('');
      setemail('');
      setphoneNumber('');
      setpassword('');
      //setError('');
    } catch (err) {
      console.error(err);
      //setError('Error signing up'); // Handle error response
    }
  };
  return (
    <div className="signup-form-container-traveller">
    <form onSubmit={handleSignupTraveller} className="signup-form">
      <h2>Create Traveller Account!<br></br>Make money on the way.</h2>
      
      <input placeholder="Full Name" type="text" id="fullName" 
      value={fullName}
      onChange={(e) => setfullName(e.target.value)} />
      <input placeholder="+2519********" type="text" id="phoneNumber" 
       value={phoneNumber}
       onChange={(e) => setphoneNumber(e.target.value)}/>
      <input placeholder="E-mail" type="email" id="email" 
       value={email}
       onChange={(e) => setemail(e.target.value)} />
      <input placeholder="password" type="password" id="password" 
       value={password}
       onChange={(e) => setpassword(e.target.value)} />
      <button type="submit">Create Account</button>
      <Link to="/account/traveller/travellerIdentity" className="link-button">I already have an account.</Link>
    </form>
    </div>
  );
}

const signUp = {
  sender: SignupSenderForm,
  traveller: SignupTravellerForm
};
export default signUp;