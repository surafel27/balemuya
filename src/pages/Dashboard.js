import Headers from "../components/Header";
import Sidebar from "../components/Sidebar";
import CardWellCome from "../components/Card";
function Dashboard() {
    const Header = Headers.headerDashboard;
    return(
        <>
        <Header/>
        <Sidebar/>
        <CardWellCome/>
        </>
    )
}
export default Dashboard;