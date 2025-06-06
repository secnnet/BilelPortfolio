import React from 'react';

interface ProjectProps {
  title: string;
  challenge: string;
  approach: string;
  outcome: string;
}

const Project: React.FC<ProjectProps> = ({ title, challenge, approach, outcome }) => {
  return (
    <div className="card">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <div className="mb-3">
        <h4 className="font-medium text-primary">Challenge</h4>
        <p className="text-sm">{challenge}</p>
      </div>
      <div className="mb-3">
        <h4 className="font-medium text-primary">Approach</h4>
        <p className="text-sm">{approach}</p>
      </div>
      <div>
        <h4 className="font-medium text-primary">Outcome</h4>
        <p className="text-sm">{outcome}</p>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Enterprise SIEM Migration",
      challenge: "A global financial institution needed to transition from legacy SIEM to a modern solution without security gaps during migration.",
      approach: "I developed a phased migration strategy with parallel operations and comprehensive testing at each stage.",
      outcome: "Successfully migrated 500+ data sources with zero security incidents during transition, improving detection capabilities by 40% and reducing false positives by 60%."
    },
    {
      title: "SOC Optimization",
      challenge: "A manufacturing company's SOC was overwhelmed with alerts and struggling with response times.",
      approach: "I implemented automated triage workflows and refined detection rules based on threat intelligence and historical data.",
      outcome: "Reduced mean time to detect (MTTD) from 6 hours to 45 minutes and mean time to respond (MTTR) from 24 hours to 4 hours."
    },
    {
      title: "Security Posture Assessment",
      challenge: "A healthcare organization needed to evaluate their security maturity against industry standards and regulatory requirements.",
      approach: "I conducted a comprehensive assessment using a custom framework based on NIST CSF, ISO 27001, and healthcare-specific controls.",
      outcome: "Identified 23 critical gaps and developed a prioritized roadmap that achieved compliance within 6 months while strengthening overall security."
    }
  ];

  return (
    <section className="section bg-white" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects & Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Project 
              key={index}
              title={project.title}
              challenge={project.challenge}
              approach={project.approach}
              outcome={project.outcome}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
