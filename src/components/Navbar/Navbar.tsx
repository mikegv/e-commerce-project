import { Link } from "react-router-dom";
import { authActions } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import classes from "./navbar.module.css";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);
  function logout() {
    dispatch(authActions.logout());
    localStorage.removeItem("token");
  }
  return (
    <nav className={classes.navbar}>
      <Link to="/">
      <img
        src={process.env.PUBLIC_URL + "/images/logo.png"}
        alt="logo"
        className={classes.logo}
      />
      </Link>
      <ul>
        <li>
          <Link to="/store">Products</Link>
        </li>
        <li>
          <Link to="/returns">Returns</Link>
        </li>
        {loggedIn && (
          <>
            <li>
              <Link to="/profile">Your Profile</Link>
            </li>
            <li className={classes.bag}>
              <Link to="/profile/cart">
                <FontAwesomeIcon icon={faShoppingBag} />
              </Link>
            </li>
            <li>
              <span onClick={logout}>Logout</span>
            </li>
          </>
        )}
        {!loggedIn && (
          <li>
            <Link to="/login">Log in</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
