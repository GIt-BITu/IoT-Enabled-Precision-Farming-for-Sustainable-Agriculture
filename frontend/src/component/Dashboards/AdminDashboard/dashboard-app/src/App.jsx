import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './Dashboard/DashboardContent';
import ReviewsContent from "./Reviews/ReviewsContent.jsx";
import AccountsContent from "./Accounts/AccountsContent.jsx";
import ComplaintsContent from "./Complaints/ComplaintsContent.jsx";
import DemandsContent from "./Demands/DemandsContent.jsx";
import TasksContent from "./Tasks/TasksContent.jsx";

// Import other content components as needed
// import AccountsContent from './components/Accounts/AccountsContent';
// import ReviewsContent from './components/Reviews/ReviewsContent';
// etc.

function SettingsContent() {
    return null;
}

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header activeTab={activeTab} />
          <main className="flex-1 overflow-auto p-6">
            {activeTab === 'dashboard' && <DashboardContent />}
            {/* Add other tab content components here */}
            {activeTab === 'reviews' && <ReviewsContent />}
            {activeTab === 'accounts' && <AccountsContent />}
            {activeTab === 'complaints' && <ComplaintsContent />}
            {activeTab === 'demands' && <DemandsContent />}
            {activeTab === 'tasks' && <TasksContent />}
            {activeTab === 'settings' && <SettingsContent />}
          </main>
        </div>
      </div>
  );
};

export default App;