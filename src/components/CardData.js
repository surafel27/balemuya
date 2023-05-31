import React from 'react';
//import { Link } from 'react-router-dom';
import { Component } from "react";
import "./CardStyles.css";
class CardRequst extends Component {

  render() {
   return (
    <div className={this.props.className}> 
   <div className="package-card">
        <div className="user-header">
          <div className='user-photo'>
             <img src={this.props.img} alt="User" />
             <h3>{this.props.fullName}</h3>
             <p>posted 1hr ago.</p>
         </div>
        <div className="card-icon">
          <div className='filter'><h3>...</h3></div>
        </div>
        </div>
        <div className="package-destination">
            <h3>Package Route [ {this.props.packageRouteFrom} - {this.props.packageRouteTo} ]</h3>
            <h5>Fixed-Price:{this.props.price}birr|Package-Wight: {this.props.packageWight}|Date: {this.props.dateToDelivery}, {this.props.monthToDelivery}, {this.props.yearToDelivery}</h5>
           <p>{this.props.detailStory}</p>
        <div className='card-footer'>
              
            </div>
          </div>
        </div>
        </div>
   ) ;
}
}
export default CardRequst;