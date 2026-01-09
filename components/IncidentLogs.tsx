import React from 'react';
import { Search, Filter, Download, MoreVertical, Eye } from 'lucide-react';

const IncidentLogs: React.FC = () => {
  const incidents = [
    { id: 'INC-2023-001', date: 'Oct 24, 2023', type: 'Fall', dept: 'Ward 3B', severity: 'High', status: 'Open', assignee: 'Sarah M.' },
    { id: 'INC-2023-002', date: 'Oct 23, 2023', type: 'Medication', dept: 'ICU', severity: 'Critical', status: 'Investigating', assignee: 'Dr. Chen' },
    { id: 'INC-2023-003', date: 'Oct 22, 2023', type: 'Equipment', dept: 'Surgery 2', severity: 'Medium', status: 'In Progress', assignee: 'Biomed' },
    { id: 'INC-2023-004', date: 'Oct 21, 2023', type: 'Staff Injury', dept: 'ER', severity: 'Low', status: 'Resolved', assignee: 'HR' },
    { id: 'INC-2023-005', date: 'Oct 20, 2023', type: 'Spill', dept: 'Cafeteria', severity: 'Low', status: 'Resolved', assignee: 'Facilities' },
    { id: 'INC-2023-006', date: 'Oct 19, 2023', type: 'Security', dept: 'Entrance', severity: 'Medium', status: 'Closed', assignee: 'Security' },
    { id: 'INC-2023-007', date: 'Oct 18, 2023', type: 'Medication', dept: 'Pediatrics', severity: 'High', status: 'Review', assignee: 'Dr. S. Jenkins' },
  ];

  const getSeverityColor = (sev: string) => {
    switch (sev) {
      case 'Critical': return 'text-red-600 bg-red-50 border-red-100';
      case 'High': return 'text-orange-600 bg-orange-50 border-orange-100';
      case 'Medium': return 'text-amber-600 bg-amber-50 border-amber-100';
      case 'Low': return 'text-sky-600 bg-sky-50 border-sky-100';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open': return 'text-blue-600 bg-blue-50';
      case 'Resolved':
      case 'Closed': return 'text-emerald-600 bg-emerald-50';
      case 'Investigating': return 'text-purple-600 bg-purple-50';
      default: return 'text-slate-600 bg-slate-50';
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-slate-50/50">
      <header className="px-6 py-5 bg-white border-b border-slate-200 flex justify-between items-center">
        <div>
          <h2 className="text-slate-900 text-2xl font-bold">Incident Logs</h2>
          <p className="text-slate-500 text-sm mt-1">Manage and track all reported safety incidents</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 text-sm font-medium">
            <Download size={18} />
            Export CSV
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-bold shadow-sm shadow-sky-500/20">
            + New Incident
          </button>
        </div>
      </header>

      <div className="p-6 flex-1 overflow-hidden flex flex-col max-w-[1600px] mx-auto w-full">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by ID, keyword, or assignee..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 text-sm font-medium">
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Table */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex-1 overflow-hidden flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase text-slate-500 font-semibold tracking-wider">
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Date Reported</th>
                  <th className="px-6 py-4">Type</th>
                  <th className="px-6 py-4">Department</th>
                  <th className="px-6 py-4">Severity</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Assignee</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {incidents.map((incident) => (
                  <tr key={incident.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4 text-sm font-medium text-slate-900">{incident.id}</td>
                    <td className="px-6 py-4 text-sm text-slate-500">{incident.date}</td>
                    <td className="px-6 py-4 text-sm text-slate-900 font-medium">{incident.type}</td>
                    <td className="px-6 py-4 text-sm text-slate-600">{incident.dept}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                        {incident.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">{incident.assignee}</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded">
                          <Eye size={18} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded">
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-sm text-slate-500">
            <span>Showing 1-7 of 142 results</span>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100 disabled:opacity-50">Previous</button>
              <button className="px-3 py-1 bg-white border border-slate-200 rounded hover:bg-slate-100">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentLogs;