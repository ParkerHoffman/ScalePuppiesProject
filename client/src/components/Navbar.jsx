import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

export default function Navbar() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/dashboard'
        },
        {
            label: 'Herds',
            icon: 'pi pi-wrench',
            items: [
                {
                    label: 'Herd Management',
                    icon: 'pi pi-wrench',
                    url: '/herds/manage'
                },
                {
                    label: 'Herd History',
                    icon: 'pi pi-book',
                    url: '/herds/history'
                }
            ]
        }
    ];

    const userBar = (
        <Button label="Log Out"/>
    );

    return (
        <div>
            <Menubar model={items} end={userBar}/>
        </div>
    )
}