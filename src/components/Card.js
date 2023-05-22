import React, { useEffect, useState } from 'react';
import "./CardStyles.css"
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
        <div className="package-card">
          <form className="form-package-card">
            <
          </form>
        </div>
        </div>
    )
}
export default CardWellCome;