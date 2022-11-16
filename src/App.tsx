import { Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store'

import './App.css';

function App() {
  const loggedIn = useSelector((state: RootState) => state.loggedIn)
  return (
    <div className="App">
      <Routes>
        {
          !loggedIn &&
          <Route path='/' element={<Login />} />
        }
        {
          loggedIn &&
          <>
            <Route path='/' element={<Dashboard />} />
            <Route path='/profile' element={<Dashboard />} />
          </>
        }
      </Routes>
    </div>
  );
}

export default App;
