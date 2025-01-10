import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-military-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-xl font-bold">
            <span className="text-primary-600">PILOT</span>
            <span className="text-military-900 dark:text-white">.DEV</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="#about" className="nav-link">About</Link>
            <Link to="#experience" className="nav-link">Experience</Link>
            <Link to="#projects" className="nav-link">Projects</Link>
            <Link to="#contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;