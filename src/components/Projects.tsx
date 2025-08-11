const projects = [
  {
    title: "Pac-Man Game with Pygame & Amazon Developer CLI",
    description:
      "A Pac-Man game implemented using Pygame, integrated with Amazon Developer CLI for additional functionality and enhanced gaming experience.",
    technologies: [
      "Python",
      "Pygame",
      "Amazon Q Developer CLI",
      "Game Development",
    ],
    github: "https://github.com/Oghenesuvwe-dev/PacMan-game-with-pygame-and-amazonqdevelopercli",
  },
  {
    title: "DS201 - Foundations of Apache Cassandra",
    description:
      "Comprehensive foundational resources and implementations for understanding and working with Apache Cassandra database systems.",
    technologies: [
      "Apache Cassandra",
      "NoSQL",
      "Database Design",
      "CQL",
    ],
    github: "https://github.com/Oghenesuvwe-dev/DS201-Foundations-of-Apache-Cassandra",
  },
  {
    title: "Resume Kraft",
    description:
      "A comprehensive project for building and managing professional resumes using customizable templates and modern design principles.",
    technologies: [
      "Resume Builder",
      "Template Engine",
      "Professional Design",
      "Career Tools",
    ],
    github: "https://github.com/Oghenesuvwe-dev/Resume-Kraft",
  },
  {
    title: "Cloud Architecture Portfolio",
    description:
      "A collection of cloud architecture designs and implementations showcasing expertise in AWS, Azure, and Oracle Cloud platforms.",
    technologies: [
      "AWS",
      "Azure",
      "Oracle Cloud",
      "Terraform",
      "Cloud Architecture",
    ],
    github: "https://github.com/Oghenesuvwe-dev",
  },
  {
    title: "FinOps Cost Optimization Tools",
    description:
      "Tools and frameworks for cloud cost optimization and financial operations management across multiple cloud platforms.",
    technologies: [
      "FinOps",
      "Cost Optimization",
      "Cloud Economics",
      "Power BI",
      "Analytics",
    ],
    github: "https://github.com/Oghenesuvwe-dev",
  },
  {
    title: "Technical Writing Portfolio",
    description:
      "A comprehensive collection of technical documentation, tutorials, and guides covering cloud technologies and best practices.",
    technologies: [
      "Technical Writing",
      "Documentation",
      "Tutorials",
      "Best Practices",
    ],
    github: "https://github.com/Oghenesuvwe-dev",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-colors duration-300 flex flex-col h-full"
            >
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hover:scale-105 transform"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;