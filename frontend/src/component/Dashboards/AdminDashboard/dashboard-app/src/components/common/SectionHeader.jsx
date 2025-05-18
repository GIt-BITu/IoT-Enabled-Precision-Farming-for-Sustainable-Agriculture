import React from 'react';
import Button from './Button';

const SectionHeader = ({ title, buttonText, children }) => (
    <div>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">{title}</h2>
            {buttonText && <Button>{buttonText}</Button>}
        </div>
        {children}
    </div>
);

export default SectionHeader;