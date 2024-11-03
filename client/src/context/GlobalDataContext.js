import {Toast} from 'primereact/toast';
import React, {useRef, useState} from 'react';


export const GlobalDataContext = React.createContext();

export const GlobalDataProvider = (props) =>{
    const [farmID,setFarmID] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const tst = useRef(null);

function toast(severity, title, content){
    tst.current.show({severity: severity, summary: title, detail: content, life: 3000});
}

const values = {
    farmID, setFarmID, isOwner, setIsOwner, toast
};

return (
<GlobalDataContext.Provider value={values}>
    <Toast ref={tst}/>
    {props.children}
</GlobalDataContext.Provider>
);

}