import React from 'react';
import CardRequst from "./CardData";
import Profile from "../assets/profile.png";
import "./CardStyles.css";
const PackageRequest = () => {
    //const CardRequst = Card.CardRequstData;
return(
    <>
    <CardRequst
    className ="container"
    img = {Profile}
    fullName = "Surafel Fekadu Megiso"
    postTime = "posted 1hr ago"
    packageRouteFrom = "Addis Abab"
    packageRouteTo = "Hawassa"
    detailStory = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    price = "500"
    packageWight = "10 kg"
    dateToDelivery = "Fir"
    monthToDelivery = "May"
    yearToDelivery = "2023"
    />
    <CardRequst
    className ="container"
    img = {Profile}
    fullName = "Ayele Alemu Megiso"
    postTime = "posted 1hr ago"
    packageRouteFrom = "Mekele"
    packageRouteTo = "Addis Ababa"
    detailStory = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    price = "500"
    packageWight = "25 kg"
    dateToDelivery = "mon"
    monthToDelivery = "july"
    yearToDelivery = "2023"
    />
    </>
);
}
export default PackageRequest;