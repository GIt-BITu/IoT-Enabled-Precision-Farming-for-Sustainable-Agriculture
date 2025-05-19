import React from 'react';

const Button = ({ children, isActive = false, ...props }) => (
    <button
        className={`mx-1 px-3 py-1 text-xs rounded-md border ${
            isActive ? 'bg-gray-100 border-gray-200' : 'border-gray-200'
        }`}
        {...props}
    >
        {children}
    </button>
);

export default Button;