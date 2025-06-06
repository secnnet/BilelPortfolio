import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="section bg-white" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
        <p className="mb-8 max-w-lg mx-auto">
          I'm always open to discussing new projects, security challenges, or opportunities to collaborate.
        </p>
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:bilel@sent.com" className="text-primary hover:underline">bilel@sent.com</a>
          </div>
          
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
            <a href="https://www.linkedin.com/in/graineb/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/graineb/</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
