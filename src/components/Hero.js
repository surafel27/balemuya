import "./HeroStyles.css"
function Hero (props){
    return(
        <>
        <div className="background"></div>
        <div className="background-texture"></div>
        <header className="header">
            <div className="left-content">
                <p className="stay-home">Stay Home!!</p>
                <h2>Send your items swiftly and safely</h2>
                <p></p>
                <p className="para">
                    That's what we need right now. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Aliquam, corporis.
                </p>
                <button className="hero-btn">Get Started</button>
            </div>
        </header>
        </>
    );
}
export default Hero;