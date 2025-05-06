import React from 'react';
import { 
  Code, Database, Globe, Terminal, Layout, Cpu, 
  Shield, Zap, Layers
} from 'lucide-react';

interface BentoItem {
  icon: React.ReactNode;
  title: string;
  color: string;
  bgColor: string;
  borderColor: string;
  gridSpan?: string;
  desktopIcon?: React.ReactNode;
}

const bentoItems: BentoItem[] = [
  {
    icon: <Code size={14} />,
    desktopIcon: <Code size={18} />,
    title: "Frontend",
    color: "text-blue-400",
    bgColor: "bg-blue-500/5",
    borderColor: "border-blue-500/10",
    gridSpan: "col-span-1"
  },
  {
    icon: <Database size={14} />,
    desktopIcon: <Database size={18} />,
    title: "Backend",
    color: "text-green-400",
    bgColor: "bg-green-500/5",
    borderColor: "border-green-500/10",
    gridSpan: "col-span-1"
  },
  {
    icon: <Globe size={14} />,
    desktopIcon: <Globe size={18} />,
    title: "Web Dev",
    color: "text-purple-400",
    bgColor: "bg-purple-500/5",
    borderColor: "border-purple-500/10",
    gridSpan: "col-span-1"
  },
  {
    icon: <Layers size={14} />,
    desktopIcon: <Layers size={18} />,
    title: "Microservices",
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/5",
    borderColor: "border-indigo-500/10",
    gridSpan: "col-span-1"
  },
  {
    icon: <Terminal size={14} />,
    desktopIcon: <Terminal size={18} />,
    title: "DevOps",
    color: "text-amber-400",
    bgColor: "bg-amber-500/5",
    borderColor: "border-amber-500/10",
    gridSpan: "col-span-1"
  },
  {
    icon: <Layout size={14} />,
    desktopIcon: <Layout size={18} />,
    title: "UI/UX",
    color: "text-pink-400",
    bgColor: "bg-pink-500/5",
    borderColor: "border-pink-500/10",
    gridSpan: "col-span-1"
  },
  {
    icon: <Cpu size={14} />,
    desktopIcon: <Cpu size={18} />,
    title: "System Design",
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/5",
    borderColor: "border-cyan-500/10",
    gridSpan: "col-span-1"
  },
  {
    icon: <Shield size={14} />,
    desktopIcon: <Shield size={18} />,
    title: "Security",
    color: "text-red-400",
    bgColor: "bg-red-500/5",
    borderColor: "border-red-500/10",
    gridSpan: "col-span-1"
  },
  {
    icon: <Zap size={14} />,
    desktopIcon: <Zap size={18} />,
    title: "Performance",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/5",
    borderColor: "border-yellow-500/10",
    gridSpan: "col-span-1"
  }
];

const SkillsBentoGrid: React.FC = () => {
  return (
    <div className="mt-2">
      {/* Mobile heading */}
      <h3 className="text-white font-medium text-sm md:hidden mb-2">What I'm Good At</h3>
      
      {/* Desktop heading */}
      <h3 className="text-white font-medium text-lg hidden md:block mb-4">What I'm Good At</h3>
      
      {/* Mobile grid - 3 columns */}
      <div className="grid grid-cols-3 gap-1.5 md:hidden">
        {bentoItems.map((item, index) => (
          <div 
            key={index}
            className={`${item.gridSpan || 'col-span-1'} ${item.bgColor} backdrop-blur-sm border ${item.borderColor} rounded-lg p-2
              transition-all duration-200`}
          >
            <div className="flex items-center gap-1.5">
              <div className={`${item.color}`}>
                {item.icon}
              </div>
              <span className={`text-[10px] font-medium ${item.color}`}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Desktop grid - 4 columns */}
      <div className="hidden md:grid grid-cols-4 gap-3">
        {bentoItems.map((item, index) => (
          <div 
            key={index}
            className={`${item.gridSpan || 'col-span-1'} ${item.bgColor} backdrop-blur-sm border ${item.borderColor} rounded-xl p-3
              hover:bg-opacity-20 transition-all duration-300 hover:scale-[1.03] hover:shadow-md`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`${item.color} p-1.5 rounded-md`}>
                {item.desktopIcon}
              </div>
              <span className={`text-sm font-medium ${item.color}`}>{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsBentoGrid; 