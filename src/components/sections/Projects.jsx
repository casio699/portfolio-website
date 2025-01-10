import { motion } from 'framer-motion';

const projects = [
  {
    title: "Flight Mission Planner",
    description: "A web-based mission planning tool incorporating military precision with modern UI/UX principles.",
    tech: ["React", "Node.js", "MongoDB", "WebGL"],
    type: "Full Stack Application"
  },
  {
    title: "Tactical Decision Simulator",
    description: "Training simulation system for rapid decision-making scenarios.",
    tech: ["Python", "TensorFlow", "Three.js"],
    type: "AI/ML Application"
  },
  {
    title: "Resource Management System",
    description: "Enterprise-level system for managing military resources and personnel.",
    tech: ["React", "GraphQL", "PostgreSQL"],
    type: "Enterprise Software"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-military-500/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combining military precision with modern software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-military-500/30 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <span className="text-primary-600 text-sm font-medium">
                  {project.type}
                </span>
                <h3 className="font-display text-xl font-bold mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;