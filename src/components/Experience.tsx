import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <ul className="space-y-1">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ExperienceItemProps {
  role: string;
  period: string;
  achievements: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ role, period, achievements }) => {
  return (
    <div className="timeline-item">
      <h3 className="text-xl font-semibold">{role}</h3>
      <div className="mb-2">
        <span className="text-gray-600">{period}</span>
      </div>
      <ul className="list-disc list-inside pl-2 space-y-1">
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  const skillCategories = [
    {
      title: "Security Architecture & Engineering",
      skills: [
        "SIEM implementation and optimization (Splunk, Microsoft Sentinel)",
        "MDR/XDR solution design and deployment",
        "Cloud security architecture (Azure, AWS)",
        "Security control frameworks (ISO 27001, NIST CSF, CIS)"
      ]
    },
    {
      title: "Offensive Security",
      skills: [
        "Penetration testing and vulnerability assessment",
        "Red team exercises and adversary simulation",
        "Web application security testing",
        "Wireless network security assessment"
      ]
    },
    {
      title: "Security Operations",
      skills: [
        "SOC team leadership and development",
        "Incident response and management",
        "Threat hunting and intelligence integration",
        "Security monitoring and alert triage optimization"
      ]
    },
    {
      title: "Data Analytics & Automation",
      skills: [
        "Security data visualization and reporting",
        "SOAR implementation and playbook development",
        "Custom detection rule creation",
        "Security metrics and KPI development"
      ]
    }
  ];

  const experiences = [
    {
      role: "Security Architect",
      period: "2023 – Present",
      achievements: [
        "Led MXDR service enhancement for a global security provider",
        "Designed unified security portal with AI-powered analytics",
        "Managed client relationships across 30+ countries",
        "Optimized detection capabilities reducing false positives by 60%"
      ]
    },
    {
      role: "SIEM Specialist & Security Engineer",
      period: "2022 – 2023",
      achievements: [
        "Implemented and optimized Splunk and Microsoft Sentinel for multiple enterprises",
        "Developed comprehensive security assessment frameworks",
        "Created custom detection rules for industry-specific threats",
        "Reduced mean time to detect (MTTD) from 6 hours to 45 minutes"
      ]
    },
    {
      role: "SOC Lead & Security Operations Engineer",
      period: "2020 – 2022",
      achievements: [
        "Led high-performance security operations teams across multiple organizations",
        "Modernized incident response protocols and playbooks",
        "Implemented threat intelligence integration for proactive security",
        "Conducted security posture assessments identifying critical vulnerabilities"
      ]
    },
    {
      role: "Cyber Incident Response Specialist",
      period: "2019 – 2022",
      achievements: [
        "Led emergency incident response for APT and ransomware threats",
        "Performed malware analysis and forensic investigations",
        "Developed incident response playbooks adopted across multiple regions",
        "Conducted root cause analysis for major security breaches"
      ]
    },
    {
      role: "Security Engineer & Penetration Tester",
      period: "2018 – 2019",
      achievements: [
        "Conducted security assessments for enterprise infrastructure",
        "Implemented real-time threat monitoring and incident response",
        "Developed security policies aligned with regulatory requirements",
        "Led security awareness programs across organizations"
      ]
    },
    {
      role: "Network Security Administrator",
      period: "2016 – 2018",
      achievements: [
        "Managed network security infrastructure for international organization",
        "Implemented access controls and authentication systems",
        "Conducted regular vulnerability assessments and remediation",
        "Ensured compliance with global security standards"
      ]
    }
  ];

  return (
    <section className="section bg-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Professional Experience</h2>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory 
                key={index}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">Career Highlights</h3>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceItem 
                key={index}
                role={exp.role}
                period={exp.period}
                achievements={exp.achievements}
              />
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 p-6 bg-gray-50 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-3">Full Professional History</h3>
          <p className="mb-4">A comprehensive CV with detailed work history and project specifics is available upon request.</p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-accent transition-colors"
          >
            Request Full CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
