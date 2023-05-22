import "./HeaderStyle.css"
import Profile from "../assets/profile.png"

function Header(props) {
return(
    <>
     <header className="non-fixed-header">
        <h1>shipmate</h1>
      </header>
    </>
)
}
function HeaderDashboard(props) {
  return(
      <>
       <header >
       <div className="web-logo">
          <h1>shipmate</h1>
        </div>
         <div className="fixed-header">
          <div className="notification-icon">
            <i className="fa fa-bell"></i>
          </div>
          <div className="user-photo">
             <img src={Profile} alt="User" />
          </div>
          </div>
        </header>
      </>
  )
  }
  const Headers = {
    header: Header,
    headerDashboard: HeaderDashboard
  }
export default Headers;