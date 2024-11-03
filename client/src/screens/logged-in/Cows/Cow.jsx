import "./Cow.css";
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import React from 'react';
import Navbar from '../../../components/Navbar';
import { Avatar } from 'primereact/avatar';
import { PanelMenu } from 'primereact/panelmenu';

export default function Cow() {

    return(
        <>
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

            <div className="content">
                <Button id="backToHerd" className="backButton" label="Back to Herd"/>

            <DataTable value={} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="attributeNate" header="Attribute Name"></Column>
                    <Column field="attributeValue" header="Value"></Column>
                </DataTable>

                <div className="buttons">
                    <Button id="editButton" className="editButton" label="Edit Information"/>
                    <Button id="transferButton" className="transferButton" label="Transfer to Another Herd"/>
                    <Button id="sellButton" className="sellButton" label="Mark as Sold"/>
                    <Button id="removeButton" className="removeButton" label="Remove Cow"/>
                </div>
            </div>

            <div className="navigation"> navigation
                <PanelMenu className="navigationMenu"/>
            </div>
            <div id="navigation">
                <Navbar/>  
            </div>
        </>
    )
};