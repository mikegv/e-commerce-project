import { Link } from "react-router-dom";
import { StyledDashboard } from "../styledComponents/styledComponents";

const Dashboard = () => {
    return (
        <StyledDashboard>
            <h2>Dashboard</h2>
            <Link to='/cart'>View Cart</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/wishlist'>Wish List</Link>
        </StyledDashboard>
    );
};

export default Dashboard;