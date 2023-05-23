import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import Card from "../components/CardData";
import PackageRequest from "../components/Card";
function Dashboard() {
    const CardWellCome = Card.CardGreeting;
   // const CardRequst = Card.CardRequstData
    const Header = Headers.headerDashboard;
    return(
        <>
        <Header/>
        <Sidebar/>
        <CardWellCome/>
        <PackageRequest/>
        </>
    )
}
export default Dashboard;