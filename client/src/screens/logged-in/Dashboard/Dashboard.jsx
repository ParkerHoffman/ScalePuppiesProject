import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Avatar } from 'primereact/avatar';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <>
            <div class="dashboardScreen">
                <div id="dashboardHeader">
                    <div class="header-content">
                        <div class="siteInfo">
                            <h1 class="headerText">HerdHarmony</h1>
                            <p class="motto">Created to create harmony in and between your herds</p>
                        </div>
                    </div>
                    <div id="navigation">
                        <Navbar/>
                    </div>
                </div>

                <div class ="wrapper">
                    <div class="content"> main content 
                        <DataView id="herdTable" class="herdTable" label="Herds"/>
                        <Button id="viewInfoButton" class="viewInfoButton" label="View Information" />
                        <Button id="newHerdButton" class="newHerdButton" label="Add New Herd" />
                        <Button id="deleteHerdButton" class="deleteHerdButton" label="Delete Herd" />
                    </div>
                </div>
            </div>
        </>
    );
}