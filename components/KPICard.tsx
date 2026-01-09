import React from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  unit?: string;
  icon: React.ReactNode;
  trend: {
    value: number;
    isPositive: boolean; // Mathematically positive (up arrow)
    label: string;
  };
  trendColor: 'red' | 'emerald' | 'amber';
}

const KPICard: React.FC<KPICardProps> = ({ title, value, unit, icon, trend, trendColor }) => {
  const isUp = trend.value > 0; // Just for arrow direction context if needed differently than logic
  
  // Map simple color props to Tailwind classes
  const colorMap = {
    red: { bg: 'bg-red-50', text: 'text-red-600', icon: 'text-red-600' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', icon: 'text-emerald-600' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', icon: 'text-amber-600' },
  };

  const theme = colorMap[trendColor];

  // Logic: "isPositive" in props here means "Good outcome" or "Mathematically Positive"? 
  // Based on the screenshot: 
  // "Total Incidents" UP 5% is RED. (Bad thing increasing)
  // "Avg Resolution" DOWN 10% is GREEN. (Bad thing decreasing)
  // So we use the `trendColor` prop to explicitly set the visual color regardless of arrow direction.

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between h-36 relative overflow-hidden group hover:shadow-md transition-shadow">
      <div className="absolute right-0 top-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity scale-150 transform origin-top-right pointer-events-none">
        {icon}
      </div>
      
      <div>
        <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-slate-900 tracking-tight flex items-baseline gap-1">
          {value} <span className="text-lg font-normal text-slate-400">{unit}</span>
        </h3>
      </div>

      <div className="flex items-center gap-2 mt-auto">
        <span className={`${theme.bg} ${theme.text} text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5`}>
          {/* Arrow logic based on context provided in dashboard usage */}
          {trendColor === 'emerald' ? <ArrowDown size={12} strokeWidth={3} /> : <ArrowUp size={12} strokeWidth={3} />}
          {trend.value}%
        </span>
        <span className="text-slate-400 text-xs font-medium">{trend.label}</span>
      </div>
    </div>
  );
};

export default KPICard;