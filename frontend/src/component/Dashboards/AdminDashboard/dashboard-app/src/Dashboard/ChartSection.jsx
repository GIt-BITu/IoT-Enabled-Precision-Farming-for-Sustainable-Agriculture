import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Button from '../components/common/Button.jsx';

const ChartSection = ({ data }) => (
    <div className="bg-white p-6 rounded-md shadow-sm mb-6">
        <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="series1" stroke="#8884d8" strokeWidth={2} />
                    <Line type="monotone" dataKey="series2" stroke="#82ca9d" strokeWidth={2} />
                    <Line type="monotone" dataKey="series3" stroke="#ffc658" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        <div className="flex justify-end mt-4">
            {['Day', 'Month', 'Year'].map((period, i) => (
                <Button key={period} isActive={i === 1}>{period}</Button>
            ))}
        </div>
    </div>
);

export default ChartSection;