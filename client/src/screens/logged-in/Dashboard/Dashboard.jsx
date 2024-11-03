import React, { useContext, useEffect, useState } from 'react';
import Header from '../../../components/Header/Header';
import { Avatar } from 'primereact/avatar';
import { Toast } from 'primereact/toast';
import { ConfirmDialog } from 'primereact/confirmdialog'; // For <ConfirmDialog /> component
import { confirmDialog } from 'primereact/confirmdialog'; // For confirmDialog method
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { GlobalDataContext } from '../../../context/GlobalDataContext';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";
import { Galleria } from 'primereact/galleria';

export default function Dashboard() {

    const {farmID} = useContext(GlobalDataContext);
    const navigate = useNavigate();
    const images = [
        {
            itemImageSrc: 'https://imgs.search.brave.com/gcReX6NwHlqxQ6-vBPLr3vgBee2Ney8vKhk3pjeRyMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/MTQ5NjMwNi9waG90/by9ob2xzdGVpbi1j/b3ctYW5kLWNhbGYu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUxjSUtlbzNJWlo0/TUZMMEE3XzNNVXJy/OUw3ODZLRms5MWV0/UWtCd0RLbmc9',
            thumbnailImageSrc: 'https://imgs.search.brave.com/gcReX6NwHlqxQ6-vBPLr3vgBee2Ney8vKhk3pjeRyMI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA1/MTQ5NjMwNi9waG90/by9ob2xzdGVpbi1j/b3ctYW5kLWNhbGYu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUxjSUtlbzNJWlo0/TUZMMEE3XzNNVXJy/OUw3ODZLRms5MWV0/UWtCd0RLbmc9',
            alt: 'Cow with her calves'
        },
        {
            itemImageSrc: 'https://imgs.search.brave.com/BO5NqSWSPHJvCvA5oEKSb_kt3LI16mXc9PZWt4TTU6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MjA1ODEzL3Bob3Rv/L2FuLWltYWdlLW9m/LXRocmVlLWNvd3Mt/aW4tYS1tZWFkb3cu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUthWW1vRVoyaGpn/RVJxZUJZZW5kRzRu/VmtKeDVlUFduQTIt/V0ljVnkybXM9',
            thumbnailImageSrc: 'https://imgs.search.brave.com/BO5NqSWSPHJvCvA5oEKSb_kt3LI16mXc9PZWt4TTU6Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/MjA1ODEzL3Bob3Rv/L2FuLWltYWdlLW9m/LXRocmVlLWNvd3Mt/aW4tYS1tZWFkb3cu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUthWW1vRVoyaGpn/RVJxZUJZZW5kRzRu/VmtKeDVlUFduQTIt/V0ljVnkybXM9',
            alt: 'Cow standing in pasture looking at camera'
        },
        {
            itemImageSrc: 'https://imgs.search.brave.com/IbYraUtF7rPJ4stcqdkaxp-DPP4kM9lMh5B9h792jes/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYz/ODIyNTEyL3Bob3Rv/L2Z1bm55LWNvdy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/c21DRzRaU3kxNmJa/T0FDcVlBOXVzWWZ5/ekhrRktIdEtWVTdt/Y2xXc05lYz0',
            thumbnailImageSrc: 'https://imgs.search.brave.com/IbYraUtF7rPJ4stcqdkaxp-DPP4kM9lMh5B9h792jes/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODYz/ODIyNTEyL3Bob3Rv/L2Z1bm55LWNvdy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/c21DRzRaU3kxNmJa/T0FDcVlBOXVzWWZ5/ekhrRktIdEtWVTdt/Y2xXc05lYz0',
            alt: 'Cows photobomb!'
        },
        {
            itemImageSrc: 'https://imgs.search.brave.com/k1aW0FRgHa3sThUkErbCZDVLUGrkU2w5GxgFkNVqJyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/ODk2ODY1Ni9waG90/by9ncmVlbi1wYXN0/dXJlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ydmt5VlZl/ZVpJSDQ2eTI4Y3Zq/SVFVWUlCdEE1bEww/TlI2RGhWeWd6Skk4/PQ',
            thumbnailImageSrc: 'https://imgs.search.brave.com/k1aW0FRgHa3sThUkErbCZDVLUGrkU2w5GxgFkNVqJyk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE3/ODk2ODY1Ni9waG90/by9ncmVlbi1wYXN0/dXJlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ydmt5VlZl/ZVpJSDQ2eTI4Y3Zq/SVFVWUlCdEE1bEww/TlI2RGhWeWd6Skk4/PQ',
            alt: 'Cows grazing in pasture'
        },
        {
            itemImageSrc: 'https://imgs.search.brave.com/RfWh6iWZ4nLVO2Z1Iwoy4l4zci7uRc68RIk0GtFXrK8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzAxMTM5Ny9waG90/by9zbWlsaW5nLW1h/bi1hbmQtd29tYW4t/c3RhbmRpbmctd2l0/aC1jb3ctYXQtZmFy/bS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bkNOTXMtZm9P/c3NNS29yWmMwMFhy/T3NiTENEd2xkLWxT/QXR5eGlJV3lfaz0',
            thumbnailImageSrc: 'https://imgs.search.brave.com/RfWh6iWZ4nLVO2Z1Iwoy4l4zci7uRc68RIk0GtFXrK8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzAxMTM5Ny9waG90/by9zbWlsaW5nLW1h/bi1hbmQtd29tYW4t/c3RhbmRpbmctd2l0/aC1jb3ctYXQtZmFy/bS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9bkNOTXMtZm9P/c3NNS29yWmMwMFhy/T3NiTENEd2xkLWxT/QXR5eGlJV3lfaz0',
            alt: 'Smiling man and woman standing with cow'
        }
    ];

    useEffect(() => {if(farmID === null){
        navigate('/')
    }}, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', height: '550px'}} />
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} />
    }

    return (
        <>
            <div className="dashboardScreen">
                <Header/>
                <div className="banner">
                    <div className="card" style={{height: '100px'}}>
                        <Galleria value={images} numVisible={5} style={{ maxWidth: '100%', maxHeight: '100px' }} 
                            item={itemTemplate} thumbnail={thumbnailTemplate} showThumbnails={false} showItemNavigators={true}
                            circular autoPlay transitionInterval={8000}/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </>
    );
}