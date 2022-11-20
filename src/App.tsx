import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Store from "./components/Shop";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { useEffect, useState } from "react";
import { authActions } from "./redux/store";
import "./App.css";

function App() {
  const [firstLoad, setFirstLoad] = useState(true)
  const dispatch = useDispatch();
  const loggedIn = useSelector((state: RootState) => state.loggedIn);
  useEffect(()=>{
    //check for token from browser on first load of page
    if(firstLoad){
      let token = localStorage.getItem('token');
      if(token){
        dispatch(authActions.login());
        setFirstLoad(false);
      }
    }
  },[])
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          {!loggedIn && (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/profile" element={<Navigate to="/" />} />
            </>
          )}
          {loggedIn && (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/profile" element={<Dashboard />} />
            </>
          )}
          <Route path="/store" element={<Store />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
