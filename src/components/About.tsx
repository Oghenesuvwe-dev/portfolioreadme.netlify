const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transition-colors duration-300">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Hi! I'm Oghenesuvwe Omashone, a versatile professional specializing in
              Cloud Architecture, FinOps Strategy, Technical Writing, and Full-Stack
              Engineering. Based in Lagos, Nigeria, I bring a unique blend of
              technical expertise and communication skills to bridge the gap between
              engineering teams, business stakeholders, and end-users.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              With certifications such as FinOps Certified Practitioner (FOCP),
              Oracle Cloud Infrastructure Certified, AWS Cloud Essentials, and
              Well-Architected Proficient, I excel in creating scalable, secure, and
              cost-efficient cloud solutions. My hands-on experience spans AWS,
              Azure, and Oracle Cloud, combined with development in Python and C#.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm passionate about helping businesses optimize their cloud spending
              while ensuring robust infrastructure deployment processes. Whether
              you're looking for a trusted Cloud Architect or an effective Technical
              Writer, I'm here to deliver exceptional results.
            </p>
            <a
              href="https://www.credly.com/users/oghenesuvwe-dev"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium hover:scale-105 transform"
            >
              View all my certifications on Credly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;