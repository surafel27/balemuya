import Landing_page from "../assets/landing_page1.svg"
import Landing_page1 from "../assets/team_up_re_.svg"
import "./DestinationStyles.css"
const Destination = () => {
    return (
        <div className="destination">
        <h1>Beautiful Landing Page!</h1>
        <p> This is Destination</p>
        <div className="first-des">
            <div className="des-text">
                <h2> Lorem Ipsum </h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum!</p>
            </div>
            <div className="image1">
                <img alt="image1" src={Landing_page}></img>
                <img alt="image1" src={Landing_page1}></img>
            </div>
        </div>
        </div>
    );

};
export default Destination;