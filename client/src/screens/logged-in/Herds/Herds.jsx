import "./Herds.css";
import { Button } from 'primereact/button';
import React from 'react';
import Header from '../../../components/Header/Header';
import { ListBox } from 'primereact/listbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
         

export default function Herds() {
    return (
        <>
            <Header/>

            <div class="content">

                <ListBox className="herdSelection" id="herdSelection"/>

                <DataTable tableStyle={{ minWidth: '50rem' }}>
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