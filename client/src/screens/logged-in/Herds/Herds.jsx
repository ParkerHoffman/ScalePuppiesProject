import "./Herds.css";
import { Button } from 'primereact/button';
import React from 'react';
import Header from '../../../components/Header/Header';
import { ListBox } from 'primereact/listbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useContext } from 'react';
import { Dropdown } from "primereact/dropdown";
         

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

    const [selectedHerd, setSelectedHerd] = useState(null);

    const herdOpt = [
        {name:"herd1"},
        {name:"herd2"},
        {name:"herd3"}
    ]

    return (
        <>
            <Header/>
            <div className="content">
                <div className="select">
                    <label className="herdSelectLabel" htmlFor="herdSelection">Select a Herd</label>
                    <Dropdown className="herdSelection" id="herdSelection" value={selectedHerd} onChange={(e) => setSelectedHerd(e.target.value)} options={herdOpt} optionLabel="name"/>
                </div>

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
        </>
    )
};