import React from 'react';
import SearchInput from './common/SearchInput';
import NotificationIcon from './common/NotificationIcon';

const Header = ({ activeTab }) => {
    const titleMap = {
        dashboard: 'Dashboard',
        reviews: 'Reviews',
        accounts: 'Accounts',
        complaints: 'Complaints',
        demands: 'Demands',
        tasks: 'Tasks',
        settings: 'Settings'
    };

    return (
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">{titleMap[activeTab]}</h1>
            <div className="flex items-center space-x-4">
                <SearchInput />
                <NotificationIcon count={4} />
            </div>
        </header>
    );
};

export default Header;