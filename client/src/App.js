import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MockLogin from './screens/MockLogin/MockLogin';
import Dashboard from './screens/logged-in/Dashboard/Dashboard';

import { GlobalDataProvider } from "./context/GlobalDataContext";

import "primereact/resources/themes/lara-light-indigo/theme.css";


function App() {

  return (
    <GlobalDataProvider>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<MockLogin/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </GlobalDataProvider>
  );
}


export default App;
