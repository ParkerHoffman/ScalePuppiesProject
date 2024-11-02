import './App.css';
import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import MockLogin from "./screens/MockLogin/MockLogin";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    window.location.href = "/dashboard";
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
