import React from 'react';

interface CertificationCategoryProps {
  title: string;
  certifications: string[];
}

const CertificationCategory: React.FC<CertificationCategoryProps> = ({ title, certifications }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {certifications.map((cert, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-2"></span>
            <span>{cert}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Certifications: React.FC = () => {
  const certificationCategories = [
    {
      title: "Education",
      certifications: [
        "Bachelor of Science in Computer Security and Ethical Hacking - Leeds Metropolitan University (2010-2014)"
      ]
    },
    {
      title: "Offensive Security",
      certifications: [
        "Offensive Security Certified Professional (OSCP) - 2014",
        "Offensive Security Wireless Professional (OSWP) - 2014",
        "Offensive Security Web Application Professional (OSWE) - 2015"
      ]
    },
    {
      title: "CompTIA",
      certifications: [
        "CompTIA Linux+ - 2016",
        "CompTIA Network+ - 2019",
        "CompTIA PenTest+ - 2020",
        "CompTIA Security+ - 2020"
      ]
    },
    {
      title: "ISC²",
      certifications: [
        "CISSP Certification - 2017"
      ]
    },
    {
      title: "Splunk",
      certifications: [
        "Splunk Architect - 2017",
        "Splunk Admin - 2017",
        "Splunk Accredited Consultant - 2018"
      ]
    }
  ];

  return (
    <section className="section bg-gray-50" id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Certifications & Education</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificationCategories.map((category, index) => (
            <CertificationCategory 
              key={index}
              title={category.title}
              certifications={category.certifications}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
