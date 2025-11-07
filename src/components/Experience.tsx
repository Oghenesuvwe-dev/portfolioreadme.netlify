const experiences = [
  {
    title: 'Cloud Architect & FinOps Strategist',
    company: 'Freelance',
    location: 'Lagos, Nigeria',
    period: '2024 - Present',
    type: 'Freelance',
    description: [
      'Design and implement scalable cloud architectures across AWS, Azure, and Oracle Cloud platforms',
      'Develop FinOps strategies to optimize cloud spending and improve cost efficiency by up to 30%',
      'Create technical documentation and best practices guides for cloud infrastructure',
      'Provide consulting services for cloud migration and optimization projects'
    ],
    technologies: ['AWS', 'Azure', 'Oracle Cloud', 'FinOps', 'Infrastructure as Code', 'Cost Optimization']
  },
  {
    title: 'Technical Writer',
    company: 'Various Clients',
    location: 'Remote',
    period: '2023 - Present',
    type: 'Freelance',
    description: [
      'Create comprehensive technical documentation for cloud services and DevOps practices',
      'Write tutorials and guides for developer communities and enterprise clients',
      'Collaborate with engineering teams to translate complex technical concepts into accessible content',
      'Maintain and update documentation repositories using modern documentation tools'
    ],
    technologies: ['Technical Writing', 'Documentation', 'Markdown', 'Git', 'API Documentation']
  },
  {
    title: 'Full-Stack Developer',
    company: 'Personal Projects',
    location: 'Lagos, Nigeria',
    period: '2022 - Present',
    type: 'Personal',
    description: [
      'Develop web applications using modern frameworks and cloud-native architectures',
      'Implement CI/CD pipelines and automated deployment processes',
      'Build RESTful APIs and microservices using Python and C#',
      'Deploy applications on cloud platforms with focus on scalability and security'
    ],
    technologies: ['Python', 'C#', 'React', 'TypeScript', 'Docker', 'Kubernetes', 'CI/CD']
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    {exp.type}
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {exp.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                    <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1.5 flex-shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.linkedin.com/in/oghenesuvwe-omashone/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            View Full Profile on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;