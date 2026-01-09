import React from 'react';
import { 
  Calendar, 
  ChevronDown, 
  PlusCircle, 
  AlertCircle, 
  Clock, 
  FileWarning, 
  CheckCircle2,
  MoreHorizontal
} from 'lucide-react';
import KPICard from './KPICard';
import { TrendChart, DepartmentBarChart } from './Charts';
import FeedItem from './FeedItem';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 bg-white border-b border-slate-200 sm:border-b-0 sm:bg-transparent shrink-0 z-10 gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-slate-900 text-2xl font-bold leading-tight">Incident Overview</h2>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            Last updated: Just now • <span className="text-sky-600 font-medium flex items-center gap-1"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span></span> Live Data</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 bg-white rounded-lg border border-slate-200 px-3 py-2 shadow-sm text-slate-700 hover:bg-slate-50 transition-colors">
            <Calendar size={18} className="text-slate-400" />
            <span className="text-sm font-medium">Last 30 Days</span>
            <ChevronDown size={16} className="text-slate-400" />
          </button>
          <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2.5 rounded-lg shadow-sm shadow-sky-500/20 transition-all active:scale-95">
            <PlusCircle size={20} />
            <span className="text-sm font-bold">Report Incident</span>
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-6">
        <div className="flex flex-col gap-6 max-w-[1600px] mx-auto">
          
          {/* KPI Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <KPICard 
              title="Total Incidents"
              value="142"
              trend={{ value: 5, isPositive: false, label: "vs last month" }} // Typically rising incidents is bad (red), but context matters. Following design.
              icon={<FileWarning className="text-sky-500" size={32} />}
              trendColor="red" // Design shows red for UP
            />
            <KPICard 
              title="Open Incidents"
              value="18"
              trend={{ value: 2, isPositive: false, label: "active cases" }}
              icon={<Clock className="text-amber-500" size={32} />}
              trendColor="amber"
            />
            <KPICard 
              title="Avg. Resolution"
              value="4.2"
              unit="Days"
              trend={{ value: 10, isPositive: true, label: "improved efficiency" }}
              icon={<CheckCircle2 className="text-emerald-500" size={32} />}
              trendColor="emerald"
            />
            <KPICard 
              title="Critical Severity"
              value="12"
              trend={{ value: 5, isPositive: true, label: "fewer criticals" }}
              icon={<AlertCircle className="text-red-500" size={32} />}
              trendColor="emerald"
            />
          </div>

          {/* Main Grid Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto">
            
            {/* Left Column (Charts) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Trend Chart */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg">Incident Trends</h3>
                    <p className="text-slate-500 text-sm">Volume over last 30 days</p>
                  </div>
                  <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                    <MoreHorizontal className="text-slate-400" />
                  </button>
                </div>
                <div className="h-[300px] w-full">
                   <TrendChart />
                </div>
              </div>

              {/* Bar Chart */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-slate-900 font-bold text-lg">Incidents by Department</h3>
                    <p className="text-slate-500 text-sm">Monthly breakdown</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                      <span className="size-2 rounded-full bg-sky-500"></span> This Month
                    </span>
                  </div>
                </div>
                <div className="h-[250px] w-full">
                  <DepartmentBarChart />
                </div>
              </div>
            </div>

            {/* Right Column (Feed) */}
            <div className="lg:col-span-4 flex flex-col h-full">
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm h-full overflow-hidden flex flex-col">
                <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0 z-10">
                  <h3 className="text-slate-900 font-bold text-lg">High-Priority Feed</h3>
                  <span className="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded-full border border-red-100 animate-pulse">3 New</span>
                </div>
                
                <div className="flex-1 overflow-y-auto p-2 space-y-2">
                  <FeedItem 
                    priority="urgent"
                    time="10m ago"
                    title="Fall Incident - Ward 3B"
                    description="Patient fell while attempting to exit bed unassisted. Assessment pending."
                    assignee="RN Sarah M."
                    avatar="https://picsum.photos/id/65/50/50"
                  />
                  <FeedItem 
                    priority="investigating"
                    time="2h ago"
                    title="Medication Discrepancy - ICU"
                    description="Dosage mismatch flagged in automated dispensing system. Verify stock levels."
                  />
                  <FeedItem 
                    priority="progress"
                    time="4h ago"
                    title="Equipment Failure - Surgery 2"
                    description="Anesthesia monitor unresponsive during setup. Biomedical engineering notified."
                  />
                  <FeedItem 
                    priority="progress"
                    time="Yesterday"
                    title="Visitor Complaint - ER"
                    description="Verbal aggression reported at triage desk. Security report filed #492."
                  />
                   <FeedItem 
                    priority="resolved"
                    time="Yesterday"
                    title="Spill Hazard - Cafeteria"
                    description="Liquid spill reported near entrance. Janitorial team dispatched and cleared."
                  />
                </div>
                
                <div className="p-3 border-t border-slate-200 bg-slate-50">
                  <button className="w-full py-2 text-sm text-sky-600 font-semibold hover:bg-sky-50 hover:text-sky-700 rounded-lg transition-colors">
                    View All Priority Incidents
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;