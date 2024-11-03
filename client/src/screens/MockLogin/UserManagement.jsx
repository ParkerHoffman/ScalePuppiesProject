import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from 'react-router-dom';
import "./MockLogin.css";
import { useState, useContext, useEffect } from 'react';
import { Login, GetUserList, DeleteUser } from '../../Services/LoginService';
import { GlobalDataContext } from "../../context/GlobalDataContext";
import Header from '../../components/Header/Header';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function UserManagement(){

const [UserList, setUserList] = useState([]);

const {farmID, toast} = useContext(GlobalDataContext);

useEffect(() => {
    const fetchData = async () => {
        var list = await GetUserList(farmID);
        setUserList(list);
    };

    fetchData();
    
}, []); 

useEffect(()=>{console.log(UserList)}, [UserList])

const {isOwner} = useContext(GlobalDataContext);
const navigate = useNavigate();


async function deleteUser(id){
    var success = await DeleteUser(farmID, id);

    if(success && success === true){
        toast('success', 'Success', 'Successfully deleted user!')
        var list = await GetUserList(farmID);
        setUserList(list);
    }
}

//If not allowed to see this, don't
if(isOwner !== true){
    navigate('/');
}

const deleteButton = (item) => {
    console.log(item);
    if(item.owner){
        return null;
    }
    return <Button onClick={() => deleteUser(item.id)}>Delete User</Button>
}



return (<div>
        <Header/>
            <div>Welcome to User Management!</div>
<DataTable value={UserList} >
    <Column field="user" header="Username"/>
    <Column field="password" header="Password"/>
    <Column body={deleteButton} />
</DataTable>
        </div>);
    
}