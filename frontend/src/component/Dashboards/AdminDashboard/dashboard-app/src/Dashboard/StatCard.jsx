import React from 'react';

const StatCard = ({ title, value, color = 'black' }) => (
    <div className="bg-white p-6 rounded-md shadow-sm">
        <div className="text-sm text-gray-500 mb-1">{title}</div>
        <div className={`text-2xl font-bold ${color === 'green' ? 'text-green-500' : ''}`}>
            {value}
        </div>
    </div>
);

export default StatCard;