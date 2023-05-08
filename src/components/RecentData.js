import "./RecentStyles.css";

function RecentData(props) {
    return(
        <div className="r-card">
            <div className="r-image">
                <img alt="recent" src={props.image2} ></img>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <button>Learn More</button>
            
        </div>
    );
}

export default RecentData;