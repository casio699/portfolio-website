import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex items-center h-screen">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          {/* 3D model will be added here */}
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-bold font-display md:text-6xl">
            <span className="text-primary-600">Fighter Pilot</span>
            <br />
            <span className="text-military-900 dark:text-white">Turned Developer</span>
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl dark:text-gray-300">
            Bringing military precision and tactical thinking to software development.
            From cockpit to code, I transform complex challenges into elegant solutions.
          </p>
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-medium text-white rounded-md bg-primary-600"
              onClick={() => window.open('portfolio.pdf')}
            >
              Download Portfolio PDF
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-medium border-2 rounded-md border-primary-600 text-primary-600"
              onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop - 100, behavior: 'smooth' })}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 font-medium border-2 rounded-md border-primary-600 text-primary-600"
              onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop - 100, behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;