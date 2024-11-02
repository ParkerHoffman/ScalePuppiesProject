import React from 'react';
import { Menubar } from 'primereact/menubar';

export default function Navbar() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/'
        }
    ];

    return (
        <div>
            <Menubar model={items}/>
        </div>
    )
}