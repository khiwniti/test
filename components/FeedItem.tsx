import React from 'react';

type PriorityType = 'urgent' | 'investigating' | 'progress' | 'resolved';

interface FeedItemProps {
  priority: PriorityType;
  time: string;
  title: string;
  description: string;
  assignee?: string;
  avatar?: string;
}

const FeedItem: React.FC<FeedItemProps> = ({ priority, time, title, description, assignee, avatar }) => {
  
  const getBadgeStyle = (type: PriorityType) => {
    switch (type) {
      case 'urgent': return 'bg-red-50 text-red-700 border-red-100';
      case 'investigating': return 'bg-amber-50 text-amber-700 border-amber-100';
      case 'progress': return 'bg-sky-50 text-sky-700 border-sky-100';
      case 'resolved': return 'bg-emerald-50 text-emerald-700 border-emerald-100';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  const getBorderColor = (type: PriorityType) => {
    switch (type) {
      case 'urgent': return 'border-l-red-500';
      case 'investigating': return 'border-l-amber-500';
      case 'progress': return 'border-l-sky-500';
      case 'resolved': return 'border-l-emerald-500';
      default: return 'border-l-slate-300';
    }
  };

  const getLabel = (type: PriorityType) => {
    switch (type) {
      case 'progress': return 'In Progress';
      default: return type;
    }
  };

  return (
    <div className={`p-3 rounded-lg border border-slate-200 border-l-[3px] ${getBorderColor(priority)} hover:bg-slate-50 transition-colors group cursor-pointer bg-white`}>
      <div className="flex justify-between items-start mb-1.5">
        <span className={`${getBadgeStyle(priority)} text-[10px] uppercase font-bold px-1.5 py-0.5 rounded tracking-wide border`}>
          {getLabel(priority)}
        </span>
        <span className="text-slate-400 text-xs font-medium">{time}</span>
      </div>
      
      <h4 className="text-slate-900 font-semibold text-sm mb-1 group-hover:text-sky-600 transition-colors">
        {title}
      </h4>
      
      <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
        {description}
      </p>

      {assignee && (
        <div className="flex items-center gap-2 mt-3 pt-2 border-t border-slate-100">
          <img src={avatar} alt="Assignee" className="size-5 rounded-full object-cover" />
          <span className="text-xs text-slate-500 font-medium">Assigned: {assignee}</span>
        </div>
      )}
    </div>
  );
};

export default FeedItem;