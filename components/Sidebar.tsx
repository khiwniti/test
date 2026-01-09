import React from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  BarChart3, 
  Users, 
  Settings, 
  Activity 
} from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onNavigate }) => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-full shrink-0 z-20 hidden md:flex">
      {/* Header */}
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 rounded-full bg-sky-100 flex items-center justify-center shrink-0 text-sky-600">
          <Activity size={24} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <h1 className="text-slate-900 text-base font-bold leading-tight truncate">Safety Admin</h1>
          <p className="text-slate-500 text-xs font-medium leading-normal truncate">General Hospital</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 flex flex-col gap-1 px-4 py-2 overflow-y-auto">
        <NavItem 
          icon={<LayoutDashboard size={20} />} 
          label="Dashboard" 
          active={currentView === 'dashboard'} 
          onClick={() => onNavigate('dashboard')}
        />
        <NavItem 
          icon={<FileText size={20} />} 
          label="Incident Logs" 
          active={currentView === 'incidents'} 
          onClick={() => onNavigate('incidents')}
        />
        <NavItem 
          icon={<BarChart3 size={20} />} 
          label="Reports" 
          active={currentView === 'reports'} 
          onClick={() => onNavigate('reports')}
        />
        <NavItem 
          icon={<Users size={20} />} 
          label="Staff" 
          active={currentView === 'staff'} 
          onClick={() => onNavigate('staff')}
        />
        <NavItem 
          icon={<Settings size={20} />} 
          label="Settings" 
          active={currentView === 'settings'} 
          onClick={() => onNavigate('settings')}
        />
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
          <img 
            src="https://picsum.photos/id/64/100/100" 
            alt="Dr. S. Jenkins" 
            className="size-9 rounded-full object-cover border border-slate-200"
          />
          <div className="flex flex-col">
            <p className="text-slate-900 text-sm font-medium">Dr. S. Jenkins</p>
            <p className="text-slate-500 text-xs">Head of Safety</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-left
        ${active 
          ? 'bg-sky-50 text-sky-600 font-semibold' 
          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium'}
      `}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
};

export default Sidebar;