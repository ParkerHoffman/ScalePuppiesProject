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

export default function Dashboard() {
    return (
        <>
            <div class="dashboardScreen">
                <div class="header">
                    <div class="siteInfo">
                    <h1 class="headerText">HerdHarmony</h1>
                    <p class="motto">Created to create harmony in and between your herds</p>
                    </div>
                    <Avatar class="profileAvatar" label="T" style={{backgroundColor: '#FFFFFF', color:'#000000'}} shape="circle"/>
                    <Menu class="profileMenu" />
                </div>

                <div class ="wrapper">
                    <div class="content"> main content 
                        <DataView id="herdTable" class="herdTable" label="Herds"/>
                        <Button id="viewInfoButton" class="viewInfoButton" label="View Information" />
                        <Button id="newHerdButton" class="newHerdButton" label="Add New Herd" />
                        <Button id="deleteHerdButton" class="deleteHerdButton" label="Delete Herd" />
                    </div>
                    <div class="navigation"> navigation
                        <PanelMenu class="navigationMenu" className="w-full md:w-20rem" />
                    </div>
                    <div id="navigation">
                        <Navbar/>
                    </div>
                </div>
            </div>
        </>
    );
}