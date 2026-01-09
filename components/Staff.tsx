import React from 'react';
import { Mail, Phone, MoreHorizontal, ShieldCheck } from 'lucide-react';

const Staff: React.FC = () => {
  const staff = [
    { id: 1, name: 'Dr. Sarah Jenkins', role: 'Head of Safety', dept: 'Administration', status: 'On Duty', avatar: 'https://picsum.photos/id/64/100/100' },
    { id: 2, name: 'Dr. Michael Chen', role: 'Senior Resident', dept: 'ICU', status: 'On Duty', avatar: 'https://picsum.photos/id/65/100/100' },
    { id: 3, name: 'Nurse Emily White', role: 'Floor Manager', dept: 'Ward 3B', status: 'Break', avatar: 'https://picsum.photos/id/66/100/100' },
    { id: 4, name: 'James Wilson', role: 'Facility Manager', dept: 'Maintenance', status: 'Off Duty', avatar: 'https://picsum.photos/id/67/100/100' },
    { id: 5, name: 'Dr. Lisa Wong', role: 'Surgeon', dept: 'Surgery', status: 'On Call', avatar: 'https://picsum.photos/id/68/100/100' },
    { id: 6, name: 'Robert Fox', role: 'Security Chief', dept: 'Security', status: 'On Duty', avatar: 'https://picsum.photos/id/69/100/100' },
    { id: 7, name: 'Amanda Lowery', role: 'Pharmacist', dept: 'Pharmacy', status: 'On Duty', avatar: 'https://picsum.photos/id/70/100/100' },
    { id: 8, name: 'David Kim', role: 'Bio-Engineer', dept: 'Equipment', status: 'Off Duty', avatar: 'https://picsum.photos/id/71/100/100' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Duty': return 'bg-emerald-500';
      case 'Break': return 'bg-amber-500';
      case 'On Call': return 'bg-sky-500';
      default: return 'bg-slate-300';
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50/50">
      <header className="px-6 py-5 bg-white border-b border-slate-200 flex justify-between items-center">
        <div>
          <h2 className="text-slate-900 text-2xl font-bold">Medical Staff Directory</h2>
          <p className="text-slate-500 text-sm mt-1">Safety officers and key personnel</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-bold shadow-sm shadow-sky-500/20">
          + Add Staff
        </button>
      </header>

      <div className="p-6 overflow-y-auto flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
          {staff.map((person) => (
            <div key={person.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center relative group">
              <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1">
                <MoreHorizontal size={20} />
              </button>
              
              <div className="relative mb-4">
                <img src={person.avatar} alt={person.name} className="size-20 rounded-full object-cover border-2 border-white shadow-sm" />
                <span className={`absolute bottom-0 right-0 size-4 rounded-full border-2 border-white ${getStatusColor(person.status)}`} title={person.status}></span>
              </div>
              
              <h3 className="text-slate-900 font-bold text-lg mb-1">{person.name}</h3>
              <p className="text-sky-600 font-medium text-sm mb-1">{person.role}</p>
              <p className="text-slate-500 text-xs font-medium mb-4">{person.dept}</p>

              <div className="flex items-center gap-2 w-full mt-auto pt-4 border-t border-slate-100">
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors">
                  <Mail size={16} /> Email
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-slate-50 text-slate-600 text-sm font-medium hover:bg-slate-100 transition-colors">
                  <Phone size={16} /> Call
                </button>
              </div>
            </div>
          ))}
          
          {/* Add New Card Placeholder */}
          <button className="border-2 border-dashed border-slate-200 rounded-xl p-5 flex flex-col items-center justify-center text-slate-400 hover:border-sky-400 hover:text-sky-500 hover:bg-sky-50/50 transition-all group min-h-[280px]">
            <div className="size-16 rounded-full bg-slate-50 group-hover:bg-white flex items-center justify-center mb-4 transition-colors">
              <ShieldCheck size={32} className="opacity-50 group-hover:opacity-100" />
            </div>
            <span className="font-semibold">Register New Staff</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Staff;