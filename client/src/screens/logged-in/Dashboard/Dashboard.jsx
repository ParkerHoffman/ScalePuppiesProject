import React from 'react';
import Navbar from '../../../components/Navbar';
import { Avatar } from 'primereact/avatar';
import { Menubar } from 'primereact/menubar';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import { PanelMenu } from 'primereact/panelmenu';
import { Menu } from 'primereact/menu';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import "./Dashboard.css";


export default function Dashboard() {
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
                        <Menu className="profileMenu" />
                    </div>
                    
                </div>

                <div class ="wrapper">
                    <div class="content"> 
                        <div> main content </div>
                        <DataView id="herdTable" className="herdTable" label="Herds"/>
                        <div className="buttons">
                            <Button id="viewInfoButton" className="viewInfoButton" label="View Information" />
                            <Button id="newHerdButton" className="newHerdButton" label="Add New Herd" />
                            <Button id="deleteHerdButton" className="deleteHerdButton" label="Delete Herd" />
                        </div>
                    </div>
                    <div className="navigation"> navigation
                        <PanelMenu className="navigationMenu"/>
                    </div>
                    <div id="navigation">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    );
}