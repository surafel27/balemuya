import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./CardStyles.css";
function CardWellCome () {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString();
    return(
      <div className="container">
        <div className="welcome-card">
            <p>{formattedDateTime}</p>
            <h1>Welcome Back, Surafel F.</h1>
        </div>
        <div className="search-input">
          <form className="search-form">
          <input placeholder="search for package" type="text" id="searchPackage" name="searchPackage"/>
        </form>
        </div>
        
        </div>
    )
}
function CardRequst (props) {
   return (
    <div className={props.className}> 
   <div className="package-card">
        <div className="user-header">
          <div className='user-photo'>
             <img src={props.img} alt="User" />
             <h3>{props.fullName}</h3>
             <p>posted 1hr ago.</p>
         </div>
        <div className="card-icon">
          <div className='filter'><h3>...</h3></div>
          <div className='close'><h3>X</h3></div>
        </div>
        </div>
        <div className="package-destination">
            <h3>Package Route [ {props.packageRouteFrom} - {props.packageRouteTo} ]</h3>
            <h5>Fixed-Price:{props.price}birr|Package-Wight: {props.packageWight}|Date: {props.dateToDelivery}, {props.monthToDelivery}, {props.yearToDelivery}</h5>
           <p>{props.detailStory}</p>
        <div className='card-footer'>
              <Link to="/dashboard" className="btn-request">Pick Package</Link>
            </div>
          </div>
        </div>
        </div>
   ) 
}
const Card = {
    CardGreeting: CardWellCome,
    CardRequstData: CardRequst
}
export default Card;