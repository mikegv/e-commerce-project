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
import axios from "axios";
import { cartActions } from "./redux/cart";

function App() {
  const [firstLoad, setFirstLoad] = useState(true);
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  const cart = useAppSelector(state => state.cart.items);
  const cartStatus = useAppSelector(state => state.cart.changed);

  useEffect(()=>{
    //on returning to page get cart from database if signed in
        let url ='https://ulayuk23e4.execute-api.us-west-1.amazonaws.com/dev/auth/cart'
        // let url = 'http://localhost:3000/auth/cart'
        let token = localStorage.getItem("token");
        if(token){
        axios.get(url,
         {
          headers: {
            'Authorization': `Bearer ${token}` 
          }})
        .then(res => {
          // console.log('axios cart GET response', res)
          dispatch(cartActions.replaceCart(res.data.cart));
        })
        .catch(err => console.log(err))
        }
  },[dispatch]);

  useEffect(() => {
    //check for token from browser on first load of page
    if (firstLoad) {
      let token = localStorage.getItem("token");
      if (token) {
        dispatch(authActions.login());
        setFirstLoad(false);
      }
      return
    }
    if(cartStatus){
      //cart changes then push changes to database
      let url ='https://ulayuk23e4.execute-api.us-west-1.amazonaws.com/dev/auth/cart'
      // let url = 'http://localhost:3000/auth/cart'
      let token = localStorage.getItem("token");
      if(token){
      axios.post(url,{
        cart: cart
      },
       {
        headers: {
          'Authorization': `Bearer ${token}` 
        }})
      .then(res => console.log(res))
      .catch(err => console.log(err))
      }
    }
  }, [firstLoad, cart, cartStatus, dispatch]);



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
