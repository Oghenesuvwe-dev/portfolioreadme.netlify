import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const badges = [
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    image: 'https://images.credly.com/size/340x340/images/f88d800c-5261-45c6-9515-0458e31c3e16/oci-foundations-associate.png',
    description: 'Oracle Cloud Infrastructure Foundations certification'
  },
  {
    name: 'Oracle Fusion Cloud Applications HCM Foundations Associate',
    image: 'https://images.credly.com/size/340x340/images/a5b3d4e2-8c7f-4b9a-a1d3-e5f7g8h9i0j1/oracle-fusion-hcm.png', 
    description: 'Oracle HCM Cloud Applications certification'
  },
  {
    name: 'Microsoft Guinness World Record Holder',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwNzNlNiIvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNmZmY1MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8dGV4dCB4PSIxMDAiIHk9IjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkdXUjwvdGV4dD4KPHR4dCB4PSIxMDAiIHk9IjEyMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0id2hpdGUiIGZvbnQtc2l6ZT0iMTYiPkhvbGRlcjwvdGV4dD4KPC9zdmc+',
    description: 'Guinness World Record for most users in an online AI lesson'
  }
];

const Badges = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="badges"
      className="py-20 bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 dark:from-rose-900 dark:via-pink-900 dark:to-purple-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Achievement Badges
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-purple-500 mx-auto rounded-full"></div>
          <motion.a
            href="https://drive.google.com/drive/folders/12fL2sslRCBXmgkTroN6RpAyRdQZJyE0J?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            View All Badges
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-rose-100 dark:border-rose-800 transition-colors duration-300 hover:scale-105 transform"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                  <span className="text-white font-bold text-lg text-center px-2">
                    {badge.name.split(' ')[0]}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {badge.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Badges;