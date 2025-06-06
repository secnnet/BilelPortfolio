import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-gradient py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I'm Bilel
        </h1>
        <h2 className="text-xl md:text-2xl mb-6">
          Security Architect & Penetration Tester
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Solving complex security challenges with over 12 years of hands-on expertise
        </p>
      </div>
    </section>
  );
};

export default Hero;
