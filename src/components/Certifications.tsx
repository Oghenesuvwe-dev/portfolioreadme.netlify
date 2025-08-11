const certifications = [
  {
    name: 'FinOps Certified Practitioner (FOCP)',
    issuer: 'FinOps Foundation',
    date: '2024',
    credentialId: 'a521b178-949a-4fe9-b2ce-c23db73e09df',
    icon: 'finops',
    verifyUrl: 'https://www.credly.com/badges/a521b178-949a-4fe9-b2ce-c23db73e09df/public_url',
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2024',
    credentialId: 'OCI-2025-CFA',
    icon: 'oracle',
    verifyUrl: null,
  },
  {
    name: 'AWS Cloud Essentials',
    issuer: 'AWS Educate',
    date: '2024',
    credentialId: 'AWS-CE-2024',
    icon: 'aws',
    verifyUrl: null,
  },
  {
    name: 'Microsoft Azure Architecture & Security',
    issuer: 'Hagital Consulting',
    date: '2024',
    credentialId: 'MAAS-2024',
    icon: 'azure',
    verifyUrl: null,
  },
  {
    name: 'AWS Well-Architected Proficient',
    issuer: 'AWS',
    date: '2024',
    credentialId: 'AWS-WAP-2024',
    icon: 'aws',
    verifyUrl: null,
  },
  {
    name: 'Oracle Cloud Success Navigator Essentials',
    issuer: 'Oracle',
    date: '2024',
    credentialId: 'OCSNE-2024',
    icon: 'oracle',
    verifyUrl: null,
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
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Credential ID: {cert.credentialId}
                  </p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors inline-flex items-center gap-1"
                    >
                      Verify Credential
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
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://www.credly.com/users/oghenesuvwe-dev"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors duration-300 font-medium hover:scale-105 transform"
          >
            View all my certifications on Credly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;