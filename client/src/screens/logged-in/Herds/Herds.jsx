import "./Herds.css";
import { Button } from 'primereact/button';
import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import { Avatar } from 'primereact/avatar';
import { PanelMenu } from 'primereact/panelmenu';
import { ListBox } from 'primereact/listbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
         

export default function Herds() {

    const herdList = [
        {
            attributeName: "test1",
            attributeValue: "1"
        },
        {
            attributeName: "test2",
            attributeValue: "2"
        },
        {
            attributeName: "test3",
            attributeValue: "3"
        }
    ];

    const herdOpt = [
        {name:"herd1"},
        {name:"herd2"},
        {name:"herd3"}
    ]

    return (
        <>
            <div class="header">
                <div class="siteInfo">
                    <h1 class="headerText">HerdHarmony</h1>
                    <p class="motto">Created to create harmony in and between your herds</p>
                </div>                
                <div className="profileInfo">
                    <Avatar className="profileAvatar" label="T" style={{backgroundColor: '#FFFFFF', color:'#000000'}} shape="square" size="large"/>
                </div>                
            </div>

            <div class="content">

                <ListBox className="herdSelection" id="herdSelection" value={herdOpt} optionLabel="name"/>

                <DataTable className="cowTable" value={herdList} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="CowID" header="Cattle Tag"></Column>
                    <Column field="Breed" header="Breed"></Column>
                    <Column field="Gender" header="Gender"></Column>
                    <Column field="" header="Select Cow"></Column>
                </DataTable>

                <div className="buttons">
                    <Button id="viewInfoButton" className="viewInfoButton" label="View Information" />
                    <Button id="newHerdButton" className="newHerdButton" label="Create New Herd" />
                    <Button id="deleteHerdButton" className="deleteHerdButton" label="Delete Herd" />
                    <Button id="mergeButton" className="mergeButton" label="Merge Herds"/>
                    <Button id="addCowButton" className="addCowButton" label="Add New Cow"/>
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