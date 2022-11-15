import { Route, Routes } from 'react-router-dom'
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store'

import './App.css';

function App() {
  const loggedIn = useSelector((state: RootState) => state.loggedIn)
  return (
    <div className="App">
      {loggedIn && <p>Hi</p>}
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
