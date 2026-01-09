import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import IncidentLogs from './components/IncidentLogs';
import Reports from './components/Reports';
import Staff from './components/Staff';
import Settings from './components/Settings';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'incidents': return <IncidentLogs />;
      case 'reports': return <Reports />;
      case 'staff': return <Staff />;
      case 'settings': return <Settings />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-50 text-slate-900">
      <Sidebar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {renderView()}
      </main>
    </div>
  );
};

export default App;