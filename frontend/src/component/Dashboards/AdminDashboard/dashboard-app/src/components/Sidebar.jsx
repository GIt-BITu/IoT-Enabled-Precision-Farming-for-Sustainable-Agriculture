import React from 'react';
import { LogOut, Home, Star, User, Settings } from 'lucide-react';
import { AccessibilityIcon, ListIcon, AlertCircle } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const sidebarItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
        { id: 'reviews', label: 'Reviews', icon: <Star size={20} /> },
        { id: 'accounts', label: 'Accounts', icon: <User size={20} /> },
        { id: 'complaints', label: 'Complaints', icon: <AccessibilityIcon size={20} /> },
        { id: 'demands', label: 'Demands', icon: <ListIcon size={20} /> },
        { id: 'tasks', label: 'Tasks', icon: <AlertCircle size={20} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={20} /> }
    ];

    return (
        <nav className="w-64 bg-black text-white flex flex-col">
            <div className="p-4 flex items-center">
                <img src="/avatar.png" alt="Admin avatar" className="w-8 h-8 rounded-full mr-2" />
                <span className="font-medium">admin</span>
            </div>
            <div className="flex-1 flex flex-col">
                {sidebarItems.map(item => (
                    <button
                        key={item.id}
                        className={`flex items-center p-4 hover:bg-gray-800 ${activeTab === item.id ? 'bg-gray-800' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        <div className="w-6 mr-3">{item.icon}</div>
                        <span>{item.label}</span>
                    </button>
                ))}
            </div>
            <button className="flex items-center p-4 hover:bg-gray-800">
                <div className="w-6 mr-3"><LogOut size={20} /></div>
                <span>Log Out</span>
            </button>
        </nav>
    );
};

export default Sidebar;