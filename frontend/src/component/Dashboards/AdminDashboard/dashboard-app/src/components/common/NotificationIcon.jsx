import React from 'react';

const NotificationIcon = ({ count }) => (
    <div className="relative">
        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white cursor-pointer">
            <span className="text-xs">{count}</span>
        </div>
    </div>
);

export default NotificationIcon;