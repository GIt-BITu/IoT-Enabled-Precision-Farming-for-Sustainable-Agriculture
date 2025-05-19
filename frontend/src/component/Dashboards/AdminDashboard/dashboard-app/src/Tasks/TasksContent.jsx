import React from 'react';
import { TasksData } from './TasksData';
import Button from '../components/common/Button';

const TasksContent = () => {
    return (
        <div className="bg-white p-6 rounded-md shadow-sm">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Complaints</h2>
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Search tasks"
                        className="border border-gray-300 rounded-md px-3 py-1"
                    />
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technician</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Greenhouse</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {TasksData.map(task => (
                        <tr key={task.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {task.title}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                {task.requester}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                {task.TechChefName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                {task.GreenHouseLocation}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {task.date}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button className="text-red-600 hover:text-red-900">Report</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Bottom Controls */}
            <div className="flex justify-between mt-6">
                <div className="flex justify-start">
                    <svg className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
                <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                        Send Task
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TasksContent;
