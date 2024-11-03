import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password'
import { FloatLabel } from 'primereact/floatlabel';
import { useNavigate } from 'react-router-dom';
import "./MockLogin.css";
import { useState, useContext, useEffect } from 'react';
import { Login, GetUserList } from '../../Services/LoginService';
import { GlobalDataContext } from "../../context/GlobalDataContext";
import Header from '../../components/Header/Header';

export default function UserManagement(){

const [UserList, setUserList] = useState([]);

const {FarmID} = useContext(GlobalDataContext);

useEffect(() => {
    const fetchData = async () => {
        var list = await GetUserList(FarmID);
        setUserList(list);
    };

    fetchData();
}, []); 

const {isOwner} = useContext(GlobalDataContext);
const navigate = useNavigate();

//If not allowed to see this, don't
if(isOwner !== true){
    navigate('/');
}



return (<div>
        <Header/>
            <div>This is the user management</div>

        </div>);
    
}