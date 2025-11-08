import React, { useState } from 'react';
import CVModal from './CVModal';

const Hero = () => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  
  const handleViewResume = () => {
    window.open('https://www.credly.com/users/oghenesuvwe-dev', '_blank');
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 dark:from-purple-900 dark:via-indigo-900 dark:to-pink-900 transition-colors duration-300"
    >
      <div className="text-center max-w-4xl mx-auto px-4">
        <img 
          src="/profile.png" 
          alt="Oghenesuvwe Omashone" 
          className="w-32 h-32 rounded-full mx-auto mb-8 shadow-lg"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm{' '}
          <span className="text-purple-600 dark:text-purple-400">Oghenesuvwe Omashone</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Cloud Architect | FinOps Strategist | Technical Writer | Full-Stack Engineer
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleViewResume}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform"
          >
            View Certifications
          </button>
          <button
            onClick={() => setIsCVModalOpen(true)}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform"
          >
            View CV
          </button>
        </div>
      </div>
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </section>
  );
};

export default Hero;