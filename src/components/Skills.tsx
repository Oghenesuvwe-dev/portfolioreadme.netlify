const skills = [
  {
    category: 'Cloud Platforms',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Azure', icon: 'azure' },
      { name: 'Oracle Cloud', icon: 'oracle' },
    ],
  },
  {
    category: 'IaC & Automation',
    items: [
      { name: 'Terraform', icon: 'terraform' },
      { name: 'Bicep', icon: 'bicep' },
      { name: 'Helm', icon: 'helm' },
      { name: 'Prometheus', icon: 'prometheus' },
      { name: 'GitHub Actions', icon: 'githubactions' },
      { name: 'Azure DevOps', icon: 'azuredevops' },
    ],
  },
  {
    category: 'Development & Tools',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'C#', icon: 'csharp' },
      { name: '.NET', icon: 'dotnet' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'Git', icon: 'git' },
    ],
  },
  {
    category: 'FinOps & Analytics',
    items: [
      { name: 'Power BI', icon: 'powerbi' },
      { name: 'Google Sheets', icon: 'sheets' },
      { name: 'Excel Dashboards', icon: 'excel' },
      { name: 'SQL', icon: 'sql' },
      { name: 'Metabase', icon: 'metabase' },
      { name: 'Apache Superset', icon: 'superset' },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-l from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900 dark:via-teal-900 dark:to-cyan-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-emerald-100 dark:border-emerald-800 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-emerald-600 dark:text-emerald-400">
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {category.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;