import React from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-gray-600">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

interface ToolItemProps {
  category: string;
  items: string[];
}

const ToolItem: React.FC<ToolItemProps> = ({ category, items }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">{category}</h3>
      <ul className="space-y-1">
        {items.map((item, index) => (
          <li key={index} className="bg-gray-100 px-3 py-1 rounded-md inline-block mr-2 mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const programmingSkills = [
    { name: "C", percentage: 57.77 },
    { name: "Python", percentage: 14.46 },
    { name: "HTML", percentage: 10.92 },
    { name: "PHP", percentage: 8.11 },
    { name: "PowerShell", percentage: 5.06 },
    { name: "ASP.NET", percentage: 3.66 }
  ];

  const securityTools = [
    {
      category: "SIEM & Security Platforms",
      items: ["Splunk Enterprise Security", "Microsoft Sentinel", "Azure"]
    },
    {
      category: "Security Operations",
      items: ["SOC Management", "MDR/XDR Solutions", "Threat Hunting"]
    },
    {
      category: "Frameworks & Methodologies",
      items: ["ISO 27001", "NIST CSF", "CIS", "Penetration Testing"]
    }
  ];

  return (
    <section className="section bg-gray-50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Technical Skills</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Programming Languages</h3>
            {programmingSkills.map((skill, index) => (
              <SkillBar 
                key={index} 
                name={skill.name} 
                percentage={skill.percentage} 
              />
            ))}
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Security Tools & Platforms</h3>
            {securityTools.map((tool, index) => (
              <ToolItem 
                key={index} 
                category={tool.category} 
                items={tool.items} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
