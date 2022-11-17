import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {

    return (
        <div style={{width: '100%',minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;