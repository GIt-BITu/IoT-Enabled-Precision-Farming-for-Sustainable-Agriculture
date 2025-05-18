import React from 'react';
import { ChevronDown, QrCode } from 'lucide-react';
import { accountsData } from './accountsData';

const AccountsContent = () => {
    return (<main className="flex-1 p-6 overflow-auto space-y-12">

            {/* Farmers Section */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Farmers accounts</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 rounded-full px-4 py-1 pl-10 focus:outline-none"
                        />
                        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    </div>
                </div>

                <div className="flex space-x-6 overflow-x-auto pb-4">
                    {accountsData.map(f => (
                        <div key={f.id} className="bg-white p-6 rounded-xl shadow flex-shrink-0 w-64">
                            <div className="flex items-center mb-3">
                                <img src={f.image} alt="" className="w-10 h-10 rounded-full mr-3" />
                                <span className="font-medium">{f.name}</span>
                                <QrCode size={20} className="ml-auto text-gray-400" />
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li><strong>DOB:</strong> {f.dob}</li>
                                <li><strong>Country:</strong> {f.country}</li>
                                <li><strong>Type:</strong> {f.type}</li>
                                <li><strong>Greenhouse:</strong> {f.greenhouse}</li>
                                <li><strong>Gender:</strong> {f.gender}</li>
                                <li><strong>Email:</strong> {f.email}</li>
                                <li><strong>Phone:</strong> {f.phone}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <ChevronDown size={24} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
            </section>

            {/* Technicians Section */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">Technicians accounts</h2>
                    <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Create
                    </button>
                </div>
                <div className="flex space-x-6 overflow-x-auto pb-4">
                    {accountsData.map(t => (
                        <div key={t.id} className="bg-white p-6 rounded-xl shadow flex-shrink-0 w-64">
                            <div className="flex items-center mb-3">
                                <img src={t.image} alt="" className="w-10 h-10 rounded-full mr-3" />
                                <span className="font-medium">{t.name}</span>
                                <QrCode size={20} className="ml-auto text-gray-400" />
                            </div>
                            <ul className="text-sm text-gray-600 space-y-1">
                                <li><strong>DOB:</strong> {t.dob}</li>
                                <li><strong>Country:</strong> {t.country}</li>
                                <li><strong>Type:</strong> {t.type}</li>
                                <li><strong>Greenhouse:</strong> {t.greenhouse}</li>
                                <li><strong>Gender:</strong> {t.gender}</li>
                                <li><strong>Email:</strong> {t.email}</li>
                                <li><strong>Phone:</strong> {t.phone}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center">
                    <ChevronDown size={24} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
            </section>

        </main>
    );
};

export default AccountsContent;