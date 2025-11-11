import React from 'react';

const Banner = () => {
  return (
    <section className="w-full py-8 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4">
          <img 
            src="/profile.PNG" 
            alt="Banner" 
            className="w-full h-auto object-contain rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;