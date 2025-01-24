import { motion } from 'framer-motion';

const projects = [
  {
    title: "POS Installation",
    description: "Expert setup and configuration of Point-of-Sale systems.",
    tech: ["Hardware", "Software", "Design", "Installation", "Operating Systems"],
    type: "KiTS' services"
  },
  {
    title: "Inventory Management & Data Entry",
    description: "Streamlined inventory solutions and seamless data integration.",
    tech: ["Organization", "Databases", "SQL", "Data Entry"],
    type: "KiTS' services"
  },
  {
    title: "Hardware Sourcing & Installation",
    description: "Provide and install high-quality hardware to support business needs.",
    tech: ["Hardware", "Business", "Installation", "Operating Systems"],
    type: "KiTS' services"
  },
  {
    title: "Flight Mission Planner",
    description: "A web-based mission planning tool incorporating military precision with modern UI/UX principles.",
    tech: ["React", "Node.js", "DataBases"],
    type: "Full Stack Application"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-military-500/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold font-display md:text-4xl">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Combining military precision with modern software development
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-military-500/30"
            >
              <div className="p-6">
                <span className="text-sm font-medium text-primary-600">
                  {project.type}
                </span>
                <h3 className="mt-2 mb-3 text-xl font-bold font-display">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-200"
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