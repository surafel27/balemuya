import React from 'react';
import './PhoneVerifyStyles.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';

function SenderMobileIdentityForm() {
  const location = useLocation();
  const userData = location.state.userData;
  const [phoneVerification, setphoneVerification] = useState("");
  const [error, setError] = useState('');

  const handlePhoneVerification = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post('http://localhost:4001/api/identityTraveller/verifySender', {
        userPhone: userData.phoneNumber,
        phoneVerification: phoneVerification
      });

      console.log(response.data); // Handle success response
      // Clear the form
      setphoneVerification('');
    } catch (err) {
      console.error(err);
      setError(err.response.data.error); // Handle error response
    }
  };

  return (
    <div className="Phone-identity-form-container">
    <form className="identity-form">
      <h2>verify your phone number</h2>
      <p>we have sent you verification code on your mobile number</p>
      {error && <p>{error}</p>}
      <input placeholder="******" type="text" id="phoneVerification" 
       value={phoneVerification}
       onChange={(e) => setphoneVerification(e.target.value)} />
      <Link onClick={handlePhoneVerification} className="formButton">confirm</Link>
    </form>
    </div>
  );
}
function TravellerMobileIdentityForm() {
    //const location = useLocation();
   // const userData = location.state.userData;
    const [phoneVerification, setphoneVerification] = useState("");
    const [error, setError] = useState('');
  
    const handlePhoneVerification = async (e) => {
      e.preventDefault();
  
      try {
        const response = await Axios.post('http://localhost:4001/api/identityTraveller/verifyTraveller', {
        //userPhone: userData.phoneNumber,
        phoneVerification: phoneVerification
        });
  
        console.log(response.data); // Handle success response
        // Clear the form
        setphoneVerification('');
      } catch (err) {
        console.error(err);
        setError(err.response.data.error); // Handle error response
      }
    };
  
    return (
      <div className="Phone-identity-form-container">
      <form className="identity-form">
        <h2>Verify Your Phone Number</h2>
        <p>we have sent you verification code on your mobile number</p>
        {error && <p>{error}</p>}
        <input placeholder="******" type="text" id="phoneVerification" 
         value={phoneVerification}
         onChange={(e) => setphoneVerification(e.target.value)} />
        <Link onClick={handlePhoneVerification} className="formButton">confirm</Link>
      </form>
      </div>
    );
}

const MobileIdentityForm = {
  senderPhone: SenderMobileIdentityForm,
  travellerPhone: TravellerMobileIdentityForm
}
export default MobileIdentityForm;