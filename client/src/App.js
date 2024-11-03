import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MockLogin from './screens/MockLogin/MockLogin';
import FarmRegister from './screens/MockLogin/FarmRegister';
import Dashboard from './screens/logged-in/Dashboard/Dashboard';
import Herds from './screens/logged-in/Herds/Herds'
import { useState } from 'react';
import { GlobalDataProvider } from "./context/GlobalDataContext";

import "primereact/resources/themes/lara-light-indigo/theme.css";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <GlobalDataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MockLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/herds/manage" element={<Herds/>}/>
        <Route path="/CreateFarm" element={<FarmRegister/>}/>
        <Route path="/herds/manage" element={<Herds/>}/>
      </Routes>
    </BrowserRouter>
    </GlobalDataProvider>
  );
}


export default App;
