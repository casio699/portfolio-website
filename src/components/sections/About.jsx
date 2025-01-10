import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 dark:bg-military-500/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Unique Perspective in Tech
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                As a former Lebanese Air Force fighter pilot with extensive training
                in both Lebanon and the United States, I bring a unique blend of
                military precision and technical expertise to software development.
              </p>
              <p>
                My journey began in mechatronics engineering, where I first
                discovered my passion for programming through C++, C#, and Assembly.
                This foundation, combined with my military career, has shaped my
                approach to problem-solving and system architecture.
              </p>
              <p>
                Today, I leverage my experience in high-pressure environments and
                complex systems to create robust, efficient software solutions.
              </p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white dark:bg-military-500/30 p-6 rounded-lg shadow-lg">
              <h3 className="font-display text-xl font-bold mb-2">Military Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Combat training and tactical decision-making experience
              </p>
            </div>
            <div className="bg-white dark:bg-military-500/30 p-6 rounded-lg shadow-lg">
              <h3 className="font-display text-xl font-bold mb-2">Technical Expertise</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack development with modern technologies
              </p>
            </div>
            <div className="bg-white dark:bg-military-500/30 p-6 rounded-lg shadow-lg">
              <h3 className="font-display text-xl font-bold mb-2">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Critical thinking under high-pressure situations
              </p>
            </div>
            <div className="bg-white dark:bg-military-500/30 p-6 rounded-lg shadow-lg">
              <h3 className="font-display text-xl font-bold mb-2">Adaptability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Quick learning and flexible approach to challenges
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;