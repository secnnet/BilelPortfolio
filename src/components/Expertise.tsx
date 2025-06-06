import React from 'react';

interface ExpertiseItemProps {
  title: string;
  description: string;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const Expertise: React.FC = () => {
  const expertiseAreas = [
    {
      title: "Security Architecture",
      description: "I design security infrastructures that balance protection with practicality. My experience spans from small-scale deployments to enterprise-wide solutions across multiple industries and regulatory environments."
    },
    {
      title: "Penetration Testing",
      description: "Finding vulnerabilities before attackers do is my specialty. I've conducted numerous penetration tests across diverse environments, helping organizations understand and address their security gaps before they become problems."
    },
    {
      title: "SIEM Implementation",
      description: "I've led Splunk and Microsoft Sentinel deployments that transform raw data into actionable security intelligence. My implementations focus on practical detection capabilities that catch real threats without overwhelming teams with false positives."
    },
    {
      title: "SOC Operations",
      description: "Building and leading effective security operations centers requires both technical knowledge and people skills. I've established SOC teams and processes that consistently deliver results, even under pressure."
    },
    {
      title: "Threat Hunting",
      description: "Proactive threat detection is essential in today's landscape. I develop and execute threat hunting programs that uncover hidden adversaries and strengthen overall security posture through continuous improvement."
    }
  ];

  return (
    <section className="section bg-gray-50" id="expertise">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Areas of Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <ExpertiseItem 
              key={index} 
              title={area.title} 
              description={area.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
