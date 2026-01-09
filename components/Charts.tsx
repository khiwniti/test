import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell
} from 'recharts';

// --- Trend Chart Data & Component ---
const trendData = [
  { name: 'Week 1', value: 20 },
  { name: '1.2', value: 45 },
  { name: '1.4', value: 35 },
  { name: '1.6', value: 30 },
  { name: 'Week 2', value: 65 },
  { name: '2.2', value: 25 },
  { name: '2.4', value: 48 },
  { name: '2.6', value: 55 },
  { name: 'Week 3', value: 40 },
  { name: '3.2', value: 15 },
  { name: '3.4', value: 85 },
  { name: '3.6', value: 35 },
  { name: 'Week 4', value: 20 },
  { name: '4.2', value: 70 },
];

export const TrendChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={trendData}
        margin={{
          top: 10,
          right: 0,
          left: -60, // Hide Y axis labels by pulling it off screen or just don't render them
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.1}/>
            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
          ticks={['Week 1', 'Week 2', 'Week 3', 'Week 4']} 
          dy={10}
        />
        <YAxis hide />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#fff', 
            borderRadius: '8px', 
            border: '1px solid #e2e8f0', 
            boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
          }}
          itemStyle={{ color: '#0f172a', fontWeight: 'bold' }}
          formatter={(value: number) => [`${value} Incidents`, 'Volume']}
          cursor={{ stroke: '#0ea5e9', strokeWidth: 1, strokeDasharray: '4 4' }}
        />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#0ea5e9" 
          strokeWidth={3} 
          fillOpacity={1} 
          fill="url(#colorValue)" 
          activeDot={{ r: 6, strokeWidth: 0, fill: '#0ea5e9' }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

// --- Bar Chart Data & Component ---
const deptData = [
  { name: 'ER', incidents: 85, color: '#0ea5e9' },
  { name: 'ICU', incidents: 62, color: '#38bdf8' }, // Sky 400
  { name: 'Surgery', incidents: 45, color: '#7dd3fc' }, // Sky 300
  { name: 'Pediatrics', incidents: 28, color: '#bae6fd' }, // Sky 200
];

export const DepartmentBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        layout="vertical"
        data={deptData}
        margin={{
          top: 0,
          right: 30,
          left: 0, 
          bottom: 0,
        }}
        barSize={24}
      >
        <XAxis type="number" hide />
        <YAxis 
          dataKey="name" 
          type="category" 
          axisLine={false} 
          tickLine={false} 
          width={80}
          tick={{ fill: '#64748b', fontSize: 13, fontWeight: 500 }}
          dx={-10}
        />
        <Tooltip
          cursor={{ fill: 'transparent' }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="bg-slate-900 text-white text-xs py-1 px-2 rounded font-bold shadow-xl">
                  {`${payload[0].value} Incidents`}
                </div>
              );
            }
            return null;
          }}
        />
        <Bar dataKey="incidents" radius={[4, 4, 4, 4]} background={{ fill: '#f8fafc', radius: 4 }}>
          {deptData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};