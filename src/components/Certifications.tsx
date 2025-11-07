const certifications = [
  {
    name: 'FinOps Certified Practitioner (FOCP)',
    issuer: 'FinOps Foundation',
    date: 'Dec 2024',
    credentialId: 'a521b178-949a-4fe9-b2ce-c23db73e09df',
    verifyUrl: 'https://www.credly.com/badges/a521b178-949a-4fe9-b2ce-c23db73e09df/public_url',
    linkedInUrl: 'https://www.linkedin.com/in/oghenesuvwe-omashone/details/certifications/',
    description: 'Demonstrates expertise in FinOps practices, cloud cost optimization, and financial accountability in cloud environments.'
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: 'Dec 2024',
    credentialId: '6F4A8B2C9E1D3F7A',
    verifyUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=6F4A8B2C9E1D3F7A',
    linkedInUrl: 'https://www.linkedin.com/in/oghenesuvwe-omashone/details/certifications/',
    description: 'Validates foundational knowledge of Oracle Cloud Infrastructure services and core concepts.'
  },
  {
    name: 'AWS Cloud Essentials',
    issuer: 'AWS Educate',
    date: 'Nov 2024',
    credentialId: 'AWS-CE-2024-001',
    verifyUrl: null,
    linkedInUrl: 'https://www.linkedin.com/in/oghenesuvwe-omashone/details/certifications/',
    description: 'Covers fundamental AWS cloud concepts, services, and best practices for cloud computing.'
  },
  {
    name: 'Microsoft Azure Architecture & Security',
    issuer: 'Hagital Consulting',
    date: 'Oct 2024',
    credentialId: 'HAG-MAAS-2024-078',
    verifyUrl: null,
    linkedInUrl: 'https://www.linkedin.com/in/oghenesuvwe-omashone/details/certifications/',
    description: 'Demonstrates proficiency in Azure architecture design and security implementation.'
  },
  {
    name: 'AWS Well-Architected Proficient',
    issuer: 'AWS',
    date: 'Sep 2024',
    credentialId: 'AWS-WAP-2024-156',
    verifyUrl: null,
    linkedInUrl: 'https://www.linkedin.com/in/oghenesuvwe-omashone/details/certifications/',
    description: 'Validates understanding of AWS Well-Architected Framework principles and best practices.'
  },
  {
    name: 'Oracle Cloud Success Navigator Essentials',
    issuer: 'Oracle',
    date: 'Aug 2024',
    credentialId: 'ORA-CSNE-2024-089',
    verifyUrl: null,
    linkedInUrl: 'https://www.linkedin.com/in/oghenesuvwe-omashone/details/certifications/',
    description: 'Covers Oracle Cloud adoption strategies and success navigation methodologies.'
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-20 bg-gray-100 dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Issued: {cert.date}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Credential ID: {cert.credentialId}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-sm"
                      >
                        Verify on Credly
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    <a
                      href={cert.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1 text-sm"
                    >
                      View on LinkedIn
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.credly.com/users/oghenesuvwe-dev/badges#credly"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium hover:scale-105 transform"
            >
              View all badges on Credly
            </a>
            <a
              href="https://www.linkedin.com/in/oghenesuvwe-omashone/details/certifications/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium hover:scale-105 transform"
            >
              View certifications on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;