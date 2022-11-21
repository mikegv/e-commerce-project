import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Store from "./components/Shop";
import Cart from "./components/cart/Cart";
import { useEffect, useState } from "react";
import { authActions } from "./redux/store";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

function App() {
  const [firstLoad, setFirstLoad] = useState(true)
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector(state => state.auth.loggedIn);
  useEffect(()=>{
    //check for token from browser on first load of page
    if(firstLoad){
      let token = localStorage.getItem('token');
      if(token){
        dispatch(authActions.login());
        setFirstLoad(false);
      }
    }
  },[firstLoad, dispatch])
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {!loggedIn && (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Navigate to="/" />} />
              <Route path="/cart" element={<Navigate to="/" />} />
            </>
          )}
          {loggedIn && (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Dashboard />} />
              <Route path="/cart" element={<Cart />} />
            </>
          )}
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
