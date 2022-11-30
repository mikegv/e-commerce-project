import { Link, Outlet } from "react-router-dom";
import { StyledDashboard } from "../styledComponents/styledComponents";

const Dashboard = () => {
  return (
    <StyledDashboard>
      <h2>Dashboard</h2>
      <div className="userContent">
        <div id="sidenav">
          <Link to="cart">View Cart</Link>
          <Link to="orders">Orders</Link>
          <Link to="wishlist">Wish List</Link>
        </div>
        <Outlet />
      </div>
    </StyledDashboard>
  );
};

export default Dashboard;
