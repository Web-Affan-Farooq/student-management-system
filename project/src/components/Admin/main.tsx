'use client';

import { useContext } from 'react';
import { OptionContext } from '@/context/OptionContext';

import Sidebar from './sidebar';
import Topnav from './Topnav';

import Dashboard from './Dashboard/Dashboard';

const Main = () => {
    const [option, setOption] = useContext(OptionContext);
    const options = [
        "Dashboard",
        "Chats",
        "Progress",
        "Events",
        "Announcements",
        "Finances",
        "People",
        "Settings"
    ]
    if(option === options[0]) {
        return (
            <div className="p-1 sm:p-3 h-[100vh] bg-dark">
                <div className="flex flex-row flex-wrap justify-between items-start lg:flex-nowrap md:flex-nowrap">
                    <Sidebar />
                    <Topnav />
                </div>
                <Dashboard/>
            </div>
        )
    }
}

export default Main