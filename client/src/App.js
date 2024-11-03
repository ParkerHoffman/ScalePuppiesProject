import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MockLogin from './screens/MockLogin/MockLogin';
import Dashboard from './screens/logged-in/Dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MockLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App;
