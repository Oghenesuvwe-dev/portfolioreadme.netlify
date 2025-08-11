import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/oghenesuvwe-omashone',
    icon: '/icons/linkedin.svg',
    color: 'hover:bg-blue-600',
  },
  {
    name: 'Email',
    url: 'mailto:Oghenesuvweomashone@proton.me',
    icon: '/icons/proton.svg',
    color: 'hover:bg-purple-600',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Oghenesuvwe-dev',
    icon: '/icons/github.svg',
    color: 'hover:bg-gray-800',
  },
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      id="contact"
      className="py-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-900 dark:via-amber-900 dark:to-yellow-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Get in Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`group bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md flex flex-col items-center text-center transition-all duration-300 ${link.color} hover:scale-105`}
              >
                <div className="w-12 h-12 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-white transition-colors duration-300">
                  {link.name}
                </h3>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;