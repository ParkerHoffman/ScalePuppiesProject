import './App.css';
import React, { useState } from "react";
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div>
        <>
          <Outlet/> {/* Renders nested routes from BrowserRouter */}
        </>
    </div>
  );
}

export default App;
