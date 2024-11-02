import './App.css';
import React, { useState } from "react";
import { Outlet, useNavigate } from 'react-router-dom';
import MockLogin from "./screens/MockLogin/MockLogin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <Outlet/> {/* Renders nested routes from BrowserRouter */}
        </>
      ) : (
        <MockLogin onLogin={handleLogin}/>
      )}
    </div>
  );
}

export default App;
