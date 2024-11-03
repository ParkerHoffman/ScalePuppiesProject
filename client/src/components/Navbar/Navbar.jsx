import React, { useContext } from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';
import 'primeicons/primeicons.css';
import './Navbar.css';
import { GlobalDataContext } from '../../context/GlobalDataContext';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
    const {setFarmID, isOwner} = useContext(GlobalDataContext);
    const navigate = useNavigate();

    function logOut() {
        setFarmID(null);
        navigate('/');
    }

    function EditUsers(){
        navigate('/EditUsers')
    }

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/dashboard',
        },
        {
            label: 'Herd Management',
            icon: 'pi pi-wrench',
            url: '/herds/manage'
        }
    ];

    const userBar = (
        <>
            <Button className="logout-button" label="Log Out" onClick={logOut}/>
            {isOwner === true ? <Button className="logout-button" label="Edit Users" onClick={EditUsers}/> : null}
            <div className="profileInfo">
                <Avatar className="user-avatar" label="T" style={{backgroundColor: '#FFFFFF', color:'#000000'}} shape="square" size="large"/>
            </div>
        </>
    );

    return (
        <div>
            <Menubar style={{margin: '5px'}} model={items} end={userBar}/>
        </div>
    )
}