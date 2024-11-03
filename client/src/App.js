import './App.css';
import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import MockLogin from "./screens/MockLogin/MockLogin";
import Dashboard from "./screens/logged-in/Dashboard/Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Dashboard/>
          <Outlet/> {/* Renders nested routes from BrowserRouter */}
        </>
      ) : (
        <MockLogin onLogin={handleLogin}/>
      )}
    </div>
  );
}


export default App;
