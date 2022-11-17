import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Layout from "./components/Layout";
import Store from "./components/Shop";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import "./App.css";

function App() {
  const loggedIn = useSelector((state: RootState) => state.loggedIn);
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
