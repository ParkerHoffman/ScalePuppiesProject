import "./Herds.css";
import { Button } from 'primereact/button';
import React from 'react';
import Header from '../../../components/Header/Header';
import { ListBox } from 'primereact/listbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useState, useContext, useEffect, useMemo } from 'react';
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { getHerdList } from "../../../Services/HerdManagerService";
import { GlobalDataContext } from "../../../context/GlobalDataContext";
import { Dialog } from "primereact/dialog";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from 'primereact/inputtextarea';
         

export default function Herds() {
    const {farmID} = useContext(GlobalDataContext);
    const { toast } = useContext(GlobalDataContext);
    const [herds, setHerds] = useState([]);
    const [selectedHerd, setSelectedHerd] = useState(null);
    const [addCowDialogVisible, setAddCowDialogVisible] = useState(false);
    const [addHerdDialogVisible, setAddHerdDialogVisible] = useState(false);
    const [ newHerd, setNewHerd ] = useState({});
    const [ newCow, setNewCow ] = useState({});
    const [ cattleTag, setCattleTag ] = useState(null);
    const [ cowBreed, setCowBreed ] = useState("");
    const [ cowGender, setCowGender ] = useState("");


    useEffect(() => {
        (async () => {
            var result = await getHerdList(farmID);
            console.log(result);

            setHerds(result);
        })();
    }, []);

    // const herd = useMemo(
    //     () => ({
    //         herd: selectedHerd
    //     })
    // );

    

    const herdList = [
        {
            CowID: 1,
            Breed: "Angus",
            Gender: 'F'
        },
        {
            CowID: 2,
            Breed: "Angus",
            Gender: 'M'
        },
        {
            CowID: 3,
            Breed: "Charolais",
            Gender: 'F'
        }
    ];

    const herdOpt = [
        {herdID:"1", location: "Pasture 2", comments: "Two Black Angus, One Charolais", herdType: "Beef"},
        {herdID:"2", location: "Pasture 3", comments: "", herdType: "Dairy"},
        {herdID:"3", location: "Pasture 1", comments: "", herdType: "Beef"}
    ]

    const onHideAddCowDialog = () => {
        setNewCow({});
        setAddCowDialogVisible(false);
    };

    const onHideAddHerdDialog = () => {
        setNewHerd({});
        setAddHerdDialogVisible(false);
    };

    const addCowFooter = (
            <div>
                <Button label="Submit"/>
                <Button label="Cancel" onClick={onHideAddCowDialog}/>
            </div>
    );

    const addHerdFooter = (
            <div>
                <Button label="Submit"/>
                <Button label="Cancel" onClick={onHideAddHerdDialog}/>
            </div>
    );

    const removeHerdFooter = (
        <div>
            <Button label="Yes"/>
            <Button label="No"/>
        </div>
    );

    const removeCowFooter = (
        <div>
            <Button label="Yes"/>
            <Button label="No"/>
        </div>
    );

    return (
        <>
            <Header/>
            <div className="content">
                <div className="select">
                    <label className="herdSelectLabel" htmlFor="herdSelection">Select a Herd</label>
                    <Dropdown className="herdSelection" id="herdSelection" value={selectedHerd} onChange={(e) => setSelectedHerd(e.target.value)} options={herdOpt} optionValue="herdID" optionLabel="location"/>
                </div>

                <DataTable className="cowTable" value={herdList} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="CowID" header="Cattle Tag"></Column>
                    <Column field="Breed" header="Breed"></Column>
                    <Column field="Gender" header="Gender"></Column>
                </DataTable>

                <div className="buttons">
                    <Button id="newHerdButton" className="newHerdButton" label="Create New Herd" />
                    <Button id="deleteHerdButton" className="deleteHerdButton" label="Delete Herd" />
                    <Button id="addCowButton" className="addCowButton" label="Add New Cow" onClick={() => setAddCowDialogVisible(true)}/>
                </div>

                <div className="dialogs">
                    <Dialog id="addCowDialog"
                        visible={addCowDialogVisible}
                        onHide={onHideAddCowDialog}
                        header="Add Cow"
                        footer={addCowFooter}
                    >
                        <div>
                            <div>
                                <FloatLabel>
                                    <InputNumber id="cattleTagInput" value={cattleTag} onValueChange={(e) => setCattleTag(e.value)}/>
                                    <label htmlFor="cattleTagInput">Cattle Tag</label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText id="cowBreedInput" value={cowBreed} onChange={(e) => setCowBreed(e.target.value)}/>
                                    <label htmlFor="cowBreedInput">Breed</label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText id="cowGenderInput" value={cowGender} onChange={(e) => setCowGender(e.target.value)}/>
                                    <label htmlFor="cowGenderInput">Gender</label>
                                </FloatLabel>
                            </div>
                        </div>
                        
                    </Dialog>

                    <Dialog id="addHerdDialog"
                        visible={addHerdDialogVisible}
                        onHide={onHideAddHerdDialog}
                        header="Add Herd"
                        footer={addHerdFooter}
                    >
                        <div>
                            <div>
                                <FloatLabel>
                                    <InputText/>
                                    <label htmlFor=""></label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText/>
                                    <label htmlFor=""></label>
                                </FloatLabel>
                                <FloatLabel>
                                    <InputText/>
                                    <label htmlFor="herdType">Herd Type</label>
                                </FloatLabel>
                            </div>
                        </div>
                    </Dialog>
                        
                    <Dialog id="removeHerdDialog"
                        footer={removeHerdFooter}
                    >
                        <div>
                            <p>Are you sure you want to remove this herd?</p>
                            <p>Selected Herd: </p>
                        </div>
                    </Dialog>

                    <Dialog id="removeCowDialog">
                        <div>
                            <p>Are you sure you want to remove this cow?</p>
                            <p>Selected Cow: </p>
                            <div style={{backgroundColor: "lightgray"}}>
                                <p>Cattle Tag: </p>
                                <p>Breed: </p>
                                <p>Gender: </p>
                            </div>
                        </div>
                    </Dialog>

                </div>
            </div>
        </>
    );
}