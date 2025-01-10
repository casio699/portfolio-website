import { motion } from 'framer-motion';

const timelineData = [
  {
    period: "2018 - Present",
    title: "Lebanese Air Force Fighter Pilot",
    description: "Air-to-ground combat pilot, specializing in tactical operations and mission-critical decision making. Led training programs for pilots and military personnel.",
    skills: ["Leadership", "Crisis Management", "Strategic Planning"]
  },
  {
    period: "2020 - Present",
    title: "Software Developer",
    description: "Self-taught full-stack developer, building complex web applications and systems while maintaining military duties.",
    skills: ["React", "Node.js", "Python", "Cloud Architecture"]
  },
  {
    period: "2016 - 2018",
    title: "Military Academy",
    description: "Rigorous training in leadership, tactical operations, and military strategy. Graduated with honors.",
    skills: ["Military Operations", "Team Leadership", "Strategic Planning"]
  },
  {
    period: "2014 - 2016",
    title: "Mechatronics Engineering",
    description: "University of Balamand. Foundation in programming, robotics, and systems engineering.",
    skills: ["C++", "Arduino", "Robotics", "Systems Design"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white dark:bg-military-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-primary-200 dark:bg-primary-900 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-0 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-1/2 mt-1"></div>
                
                <div className="ml-12 md:ml-0 bg-gray-50 dark:bg-military-500/30 p-6 rounded-lg shadow-lg">
                  <span className="text-primary-600 font-display font-bold">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;