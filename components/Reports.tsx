import React from 'react';
import { FileBarChart, Download, CalendarRange, Share2, Printer } from 'lucide-react';
import { TrendChart, DepartmentBarChart } from './Charts'; // Reusing existing charts for demo

const Reports: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full overflow-hidden">
      <header className="px-6 py-5 bg-white border-b border-slate-200 flex justify-between items-center shrink-0">
        <div>
          <h2 className="text-slate-900 text-2xl font-bold">Analytics & Reports</h2>
          <p className="text-slate-500 text-sm mt-1">Generate insights from safety data</p>
        </div>
        <div className="flex gap-3">
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 text-sm font-medium">
            <CalendarRange size={18} />
            Oct 2023
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-sm font-bold shadow-sm shadow-sky-500/20">
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-[1200px] mx-auto space-y-8">
          
          {/* Summary Section */}
          <section>
            <h3 className="text-lg font-bold text-slate-800 mb-4">Monthly Executive Summary</h3>
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <div className="prose max-w-none text-slate-600">
                <p className="mb-4">
                  October has seen a <strong>5% increase</strong> in reported incidents compared to September, primarily driven by a spike in fall-related events in Ward 3B. However, the average resolution time has improved by <strong>12%</strong> due to the new rapid response protocol implemented on Oct 5th.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <p className="text-xs text-slate-500 uppercase font-semibold">Safety Score</p>
                    <p className="text-3xl font-bold text-emerald-600 mt-1">94/100</p>
                    <p className="text-xs text-emerald-600 mt-1 flex items-center gap-1">↑ 2pts vs last month</p>
                  </div>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <p className="text-xs text-slate-500 uppercase font-semibold">Compliance Rate</p>
                    <p className="text-3xl font-bold text-sky-600 mt-1">98.5%</p>
                    <p className="text-xs text-sky-600 mt-1 flex items-center gap-1">↑ 0.5% vs last month</p>
                  </div>
                   <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <p className="text-xs text-slate-500 uppercase font-semibold">Total Audits</p>
                    <p className="text-3xl font-bold text-slate-800 mt-1">24</p>
                    <p className="text-xs text-slate-500 mt-1">Completed on schedule</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Incident Volume Trend</h4>
              <div className="h-64">
                <TrendChart />
              </div>
            </div>
             <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Departmental Breakdown</h4>
              <div className="h-64">
                <DepartmentBarChart />
              </div>
            </div>
          </div>

          {/* Available Reports */}
          <section>
             <h3 className="text-lg font-bold text-slate-800 mb-4">Available Reports</h3>
             <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
               <div className="divide-y divide-slate-100">
                 {[
                   { title: 'Q3 2023 Safety Compliance Audit', date: 'Oct 01, 2023', size: '2.4 MB' },
                   { title: 'Monthly Staff Training Log', date: 'Oct 01, 2023', size: '1.1 MB' },
                   { title: 'Equipment Maintenance Review', date: 'Sep 28, 2023', size: '4.8 MB' },
                   { title: 'Patient Fall Analysis Report', date: 'Sep 15, 2023', size: '3.2 MB' }
                 ].map((report, idx) => (
                   <div key={idx} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors group">
                     <div className="flex items-center gap-4">
                       <div className="size-10 rounded bg-red-50 text-red-600 flex items-center justify-center">
                         <FileBarChart size={20} />
                       </div>
                       <div>
                         <p className="text-sm font-semibold text-slate-900">{report.title}</p>
                         <p className="text-xs text-slate-500">{report.date} • {report.size}</p>
                       </div>
                     </div>
                     <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full"><Share2 size={18} /></button>
                       <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full"><Printer size={18} /></button>
                       <button className="p-2 text-sky-600 hover:bg-sky-50 rounded-full"><Download size={18} /></button>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Reports;