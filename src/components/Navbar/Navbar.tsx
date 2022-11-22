import { Link } from "react-router-dom";
import { authActions } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";

import "./navbar.module.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  function logout(){
    dispatch(authActions.logout());
    localStorage.removeItem('token');
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/store">Products</Link>
        </li>

        {
        loggedIn && (
          <>
            <li>
              <Link to="/profile">Your Profile</Link>
            </li>
            <li>
              <span onClick={logout}>Logout</span>
            </li>
          </>
        )
        }
        {
          !loggedIn &&
          <li>
            <Link to='/'>Log in</Link>
          </li>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
