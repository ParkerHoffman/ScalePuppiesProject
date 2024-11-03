import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

export default function Header() {
    return (
        <div id="layoutHeader" className="header">
                <div>
                    <div className="siteInfo">
                        <h1 class="headerText">HerdHarmony</h1>
                        <p class="motto">Created to create harmony in and between your herds</p>
                    </div>
                        
                </div>
        <div id="navigation">
                <Navbar/>
        </div>
        </div>
    );
}