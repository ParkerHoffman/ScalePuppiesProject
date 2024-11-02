import React from 'react';
import Navbar from '../../../components/Navbar';

export default function Dashboard() {
    return (
        <>
            <h1>HerdHarmony</h1>

            <div id="container">
                <div id="header"> <p>Header</p>
                    <div id="wrapper">
                        <div id="content"> main content </div>
                    </div>
                    <div id="navigation">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    );
}