import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Products from "./components/Products";
import Cart from "./components/cart/Cart";
import { useEffect, useState } from "react";
import { authActions } from "./redux/store";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import Orders from "./components/orders/Orders";
import Landing from "./components/Landing";
import WishList from "./components/wishList/WishList";
import ReturnsForm from "./components/returns/ReturnsForm";
import Return from "./components/returns/Return";

function App() {
  const [firstLoad, setFirstLoad] = useState(true);
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  useEffect(() => {
    //check for token from browser on first load of page
    if (firstLoad) {
      let token = localStorage.getItem("token");
      if (token) {
        dispatch(authActions.login());
        setFirstLoad(false);
      }
    }
  }, [firstLoad, dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<Products />} />
          <Route path="/returns" element={<ReturnsForm />} />
          <Route path="/returns/:id" element={<Return />} />
          {!loggedIn && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Navigate to="/login" />} />
              <Route path="/profile/cart" element={<Navigate to="/login" />} />
              <Route path="/profile/orders" element={<Navigate to="/login" />} />
              <Route path="/profile/wishlist" element={<Navigate to="/login" />} />
            </>
          )}
          {loggedIn && (
              <Route path="/profile" element={<Dashboard />}>
                <Route path="cart" element={<Cart />} />
                <Route path="orders" element={<Orders />} />
                <Route path="wishlist" element={<WishList />} />
              </Route>
          )}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
