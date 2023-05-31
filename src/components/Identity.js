import React from 'react';
import './IdentityStyles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

function SenderIdentityForm() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState('');

  //Axios.withCredentials = true;

  const handleLoginSender = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:4001/api/senderLogin/loginSender', {
        email,
        password
      });

      console.log(response.data); // Handle success response

      // Clear the form
      setemail('');
      setpassword('');
      setError('');
    } catch (err) {
      console.error(err);
      setError(err.response.data.error); // Handle error response
    }
  };

 /* useEffect(() => {
    Axios.get('http://localhost:4001/api/senderLogin/loginSender').then(response => {
      console.log(response);
    })
  }, []); */

  return (
    <div className="identity-form-container">
    <form className="identity-form">
      <h2>Sender Sign In</h2>
      <p>Welcome to Shipmate! Sign in with your email and password below.</p>
      {error && <p>{error}</p>}
      <input placeholder="Email Adress" type="email" id="email" 
       value={email}
       onChange={(e) => setemail(e.target.value)} />
      <input placeholder="Password" type="password" id="password" 
      value={password}
      onChange={(e) => setpassword(e.target.value)} />
      <Link onClick={handleLoginSender} className="formButton">Sign In</Link>
      <p>New To Shipmate?<Link to="/account/sender/signupSender" className='crt-link'>Create An Account!</Link></p>
    </form>
    </div>
  );
}
function TravellerIdentityForm() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState('');

  const handleLoginTaveller = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:4001/api/travellerLogin/loginTraveller', {
        email,
        password
      });

      console.log(response.data); // Handle success response

      // Clear the form
      setemail('');
      setpassword('');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Error Login'); // Handle error response
    }
  };
  return (
    <div className="identity-form-container">
    <form className="identity-form">
      <h2>Traveller Sign In</h2>
      <p>Welcome to Shipmate! Sign in with your email and password below.</p>
      {error && <p>{error}</p>}
      <input placeholder="Email Adress" type="email" id="email" 
      value={email}
      onChange={(e) => setemail(e.target.value)} />
      <input placeholder="Password" type="password" id="password"
      value={password}
      onChange={(e) => setpassword(e.target.value)}  />
      <Link onClick={handleLoginTaveller} className="formButton">Sign In</Link>
     <p>New To Shipmate?<Link to="/account/traveller/signupTraveller" className='crt-link'>Create An Account!</Link></p>
    </form>
    </div>
  );
}

const IdentityForm = {
  sender: SenderIdentityForm,
  traveller: TravellerIdentityForm
}
export default IdentityForm;