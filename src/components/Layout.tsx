import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout: React.FC = () => {

    return (
        <div style={{width: '100%',minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;