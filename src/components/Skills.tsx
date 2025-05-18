import React from 'react';
import { Code, Database, Terminal, Cpu, Layers } from 'lucide-react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
    icon: <Code className="text-blue-400" size={20} />, 
    color: 'blue',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL', 'C++'],
  },
  {
    title: 'Frameworks & Tools',
    icon: <Layers className="text-green-400" size={20} />, 
    color: 'green',
    skills: ['Spring Boot', 'Node.js', 'React', 'Express.js', 'Docker', 'Git', 'Postman', 'Apache'],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Terminal className="text-purple-400" size={20} />, 
    color: 'purple',
    skills: ['AWS (EC2, S3, Lambda)', 'Kubernetes', 'Jenkins', 'CI/CD', 'Linux', 'Nginx'],
  },
  {
    title: 'Databases',
    icon: <Database className="text-orange-400" size={20} />, 
    color: 'orange',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'HBase', 'NoSQL'],
  },
  {
    title: 'Other',
    icon: <Cpu className="text-yellow-400" size={20} />, 
    color: 'yellow',
    skills: ['Agile', 'REST APIs', 'RBAC', 'Jira', 'Outlook'],
  },
];

const cardColor = {
  blue: 'border-blue-400',
  green: 'border-green-400',
  purple: 'border-purple-400',
  orange: 'border-orange-400',
  yellow: 'border-yellow-400',
};
const headingColor = {
  blue: 'text-blue-400',
  green: 'text-green-400',
  purple: 'text-purple-400',
  orange: 'text-orange-400',
  yellow: 'text-yellow-400',
};
const pillHover = {
  blue: 'hover:bg-blue-900/80 hover:text-blue-300',
  green: 'hover:bg-green-900/80 hover:text-green-300',
  purple: 'hover:bg-purple-900/80 hover:text-purple-300',
  orange: 'hover:bg-orange-900/80 hover:text-orange-300',
  yellow: 'hover:bg-yellow-900/80 hover:text-yellow-300',
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-12 md:py-20 px-4 md:px-8 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-400">Skills</h2>
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Languages */}
          <div className={`flex-1 border border-[1px] border-opacity-20 rounded-xl p-5 ${cardColor.blue} transition-all duration-200 hover:bg-neutral-700/80 hover:scale-[1.015] bg-black/80` }>
            <div className="flex items-center gap-2 mb-4">
              {skillGroups[0].icon}
              <span className={`font-semibold text-lg ${headingColor.blue}`}>{skillGroups[0].title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroups[0].skills.map(skill => (
                <span key={skill} className={`bg-black/80 text-gray-200 px-3 py-1 rounded-md text-sm font-medium transition-all duration-150 ${pillHover.blue}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Frameworks & Tools */}
          <div className={`flex-1 border border-[1px] border-opacity-20 rounded-xl p-5 ${cardColor.green} transition-all duration-200 hover:bg-neutral-700/80 hover:scale-[1.015] bg-black/80`}>
            <div className="flex items-center gap-2 mb-4">
              {skillGroups[1].icon}
              <span className={`font-semibold text-lg ${headingColor.green}`}>{skillGroups[1].title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroups[1].skills.map(skill => (
                <span key={skill} className={`bg-black/80 text-gray-200 px-3 py-1 rounded-md text-sm font-medium transition-all duration-150 ${pillHover.green}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Cloud & DevOps */}
          <div className={`flex-1 border border-[1px] border-opacity-20 rounded-xl p-5 ${cardColor.purple} transition-all duration-200 hover:bg-neutral-700/80 hover:scale-[1.015] bg-black/80`}>
            <div className="flex items-center gap-2 mb-4">
              {skillGroups[2].icon}
              <span className={`font-semibold text-lg ${headingColor.purple}`}>{skillGroups[2].title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroups[2].skills.map(skill => (
                <span key={skill} className={`bg-black/80 text-gray-200 px-3 py-1 rounded-md text-sm font-medium transition-all duration-150 ${pillHover.purple}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* Databases */}
          <div className={`flex-1 border border-[1px] border-opacity-20 rounded-xl p-5 ${cardColor.orange} transition-all duration-200 hover:bg-neutral-700/80 hover:scale-[1.015] bg-black/80`}>
            <div className="flex items-center gap-2 mb-4">
              {skillGroups[3].icon}
              <span className={`font-semibold text-lg ${headingColor.orange}`}>{skillGroups[3].title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroups[3].skills.map(skill => (
                <span key={skill} className={`bg-black/80 text-gray-200 px-3 py-1 rounded-md text-sm font-medium transition-all duration-150 ${pillHover.orange}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Row 4 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Other */}
          <div className={`flex-1 border border-[1px] border-opacity-20 rounded-xl p-5 ${cardColor.yellow} transition-all duration-200 hover:bg-neutral-700/80 hover:scale-[1.015] bg-black/80`}>
            <div className="flex items-center gap-2 mb-4">
              {skillGroups[4].icon}
              <span className={`font-semibold text-lg ${headingColor.yellow}`}>{skillGroups[4].title}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroups[4].skills.map(skill => (
                <span key={skill} className={`bg-black/80 text-gray-200 px-3 py-1 rounded-md text-sm font-medium transition-all duration-150 ${pillHover.yellow}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 