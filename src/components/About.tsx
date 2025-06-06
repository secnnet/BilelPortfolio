import React from 'react';

const About: React.FC = () => {
  return (
    <section className="section bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="mb-4">
              I'm a cybersecurity professional with a passion for uncovering vulnerabilities and building robust security architectures. Over the past 12 years, I've worked with organizations like Microsoft, IBM, Splunk, and BlueVoyant to strengthen their security posture and protect critical assets.
            </p>
            <p className="mb-4">
              My approach combines technical expertise with practical solutions. I specialize in SIEM implementation, SOC operations, and threat hunting—always focusing on delivering security that works in the real world, not just on paper.
            </p>
            <p>
              When I'm not hunting threats or architecting security solutions, you'll find me training Brazilian Jiu-Jitsu (working toward my blue belt) or enjoying time fishing and spearfishing. These pursuits have taught me patience and persistence—qualities that serve me well in cybersecurity.
            </p>
          </div>
          <div className="md:w-1/3 flex flex-col justify-center">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Location</h3>
              <p className="mb-4">Kyoto, Japan</p>
              
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <ul className="list-disc list-inside">
                <li>Brazilian Jiu-Jitsu</li>
                <li>Fishing & Spearfishing</li>
                <li>Cybersecurity Research</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
