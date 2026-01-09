import React from 'react';
import { Bell, Lock, User, Palette, Globe, HelpCircle } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full bg-slate-50/50">
      <header className="px-6 py-5 bg-white border-b border-slate-200">
        <h2 className="text-slate-900 text-2xl font-bold">Settings</h2>
        <p className="text-slate-500 text-sm mt-1">Manage system preferences and notifications</p>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Menu */}
          <aside className="w-full md:w-64 flex-shrink-0">
             <nav className="flex flex-col gap-1">
               <SettingsLink icon={<User size={18} />} label="Profile" active />
               <SettingsLink icon={<Bell size={18} />} label="Notifications" />
               <SettingsLink icon={<Lock size={18} />} label="Security" />
               <SettingsLink icon={<Palette size={18} />} label="Appearance" />
               <SettingsLink icon={<Globe size={18} />} label="Language" />
               <SettingsLink icon={<HelpCircle size={18} />} label="Help & Support" />
             </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            
            {/* Profile Section */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Profile Information</h3>
              <div className="flex items-start gap-6 mb-6">
                 <img src="https://picsum.photos/id/64/150/150" alt="Avatar" className="size-24 rounded-full object-cover border-4 border-slate-50" />
                 <div className="flex-1">
                   <button className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 mb-2">Change Avatar</button>
                   <p className="text-xs text-slate-400">JPG, GIF or PNG. Max size 800K</p>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input type="text" defaultValue="Sarah" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none text-slate-900" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input type="text" defaultValue="Jenkins" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none text-slate-900" />
                </div>
                 <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" defaultValue="s.jenkins@hospital.general.org" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 outline-none text-slate-900" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Role Title</label>
                  <input type="text" defaultValue="Head of Safety" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-500 cursor-not-allowed" disabled />
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button className="px-6 py-2 bg-sky-600 text-white rounded-lg font-medium hover:bg-sky-700 transition-colors shadow-sm shadow-sky-600/20">Save Changes</button>
              </div>
            </section>

             {/* Notifications Section */}
             <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 pb-2 border-b border-slate-100">Notifications</h3>
              <div className="space-y-4">
                <ToggleItem title="Critical Alerts" description="Receive immediate alerts for high-severity incidents" checked />
                <ToggleItem title="Daily Digest" description="Receive a summary of daily activity at 8:00 AM" checked />
                <ToggleItem title="Staff Updates" description="Notifications when staff status changes" checked={false} />
                <ToggleItem title="System Maintenance" description="Alerts about planned downtime" checked />
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

const SettingsLink: React.FC<{ icon: React.ReactNode, label: string, active?: boolean }> = ({ icon, label, active }) => (
  <a href="#" className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${active ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}>
    {icon}
    {label}
  </a>
);

const ToggleItem: React.FC<{ title: string, description: string, checked?: boolean }> = ({ title, description, checked }) => (
  <div className="flex items-center justify-between py-2">
    <div>
      <p className="text-sm font-medium text-slate-900">{title}</p>
      <p className="text-xs text-slate-500">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" defaultChecked={checked} />
      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
    </label>
  </div>
);

export default Settings;