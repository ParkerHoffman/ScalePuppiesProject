import React, { useContext, useEffect } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Avatar } from 'primereact/avatar';
import "./Dashboard.css";
import { GlobalDataContext } from '../../../context/GlobalDataContext';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";

export default function Dashboard() {
const {farmID} = useContext(GlobalDataContext);
const navigate = useNavigate();
useEffect(() => {if(farmID === null){
    navigate('/')
}}, []);


    return (
        <>
            <div class="dashboardScreen">
                <div class="header">
                    <div class="siteInfo">
                        <h1 class="headerText">HerdHarmony</h1>
                        <p class="motto">Created to create harmony in and between your herds</p>
                    </div>
                    
                    <div className="profileInfo">
                        <Avatar className="profileAvatar" label="T" style={{backgroundColor: '#FFFFFF', color:'#000000'}} shape="square" size="large"/>
                    </div>
                    <div id="navigation">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    );
}