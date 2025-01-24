import { motion } from 'framer-motion';

const timelineData = [
  {
    period: "2017 - 2018",
    title: "Mechatronics Engineering",
    description: "University of Balamand. Foundation in programming, robotics, and systems engineering.",
    skills: ["C", "C++", "Arduino", "Robotics", "Systems Design", "Automation"]
  },
  {
    period: "2018 - 2021",
    title: "Military Academy",
    description: "Rigorous training in leadership, tactical operations, and military strategy. Graduated with honors.",
    skills: ["Military Operations", "Team Leadership", "Strategic Planning"]
  },
  {
    period: "2018 - Present",
    title: "Lebanese Air Force Fighter Pilot",
    description: "Air-to-ground combat pilot, specializing in tactical operations and mission-critical decision making. Led various training programs for pilots and military personnel.",
    skills: ["Leadership", "Crisis Management", "Strategic Planning", "Training"]
  },
  {
    period: "2017 - Present",
    title: "Software Developer",
    description: "Self-taught full-stack developer, building complex web applications and systems while maintaining military duties.",
    skills: ["React", "Node.js", "Python", "HTML", "CSS", "Javascript"]
  },
  {
    period: "2024 - Present",
    title: "Founder of KiTS - KHODER’s Integration & Tech. Solutions",
    description: "KiTS is a Specialized Technology Solutions Provider dedicated to delivering comprehensive and scalable technology solutions tailored for startups and growing businesses across Lebanon",
    skills: ["POS Installation", "Inventory Management & Data Entry", "Hardware Sourcing & Installation", "...And Much More!"],
  },
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
          <h2 className="mb-12 text-3xl font-bold text-center font-display md:text-4xl">
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
                <div className="absolute w-4 h-4 mt-1 transform -translate-x-1/2 rounded-full left-4 md:left-0 bg-primary-600"></div>
                
                <div className="p-6 ml-12 rounded-lg shadow-lg md:ml-0 bg-gray-50 dark:bg-military-500/30">
                  <span className="font-bold text-primary-600 font-display">
                    {item.period}
                  </span>
                  <h3 className="mt-2 mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200"
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