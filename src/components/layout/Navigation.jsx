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
      <nav className="py-4 section-container">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold font-display">
            <span className="text-primary-600">PILOT</span>
            <span className="text-military-900 dark:text-white">.DEV</span>
          </Link>
          
          <div className="hidden space-x-8 md:flex">
            <a href="#about" className="nav-link" onClick={(e) => {e.preventDefault(); window.scrollTo({top: document.querySelector('#about').offsetTop - 100, behavior: 'smooth'})}}>About</a>
            <a href="#experience" className="nav-link" onClick={(e) => {e.preventDefault(); window.scrollTo({top: document.querySelector('#experience').offsetTop - 100, behavior: 'smooth'})}}>Experience</a>
            <a href="#projects" className="nav-link" onClick={(e) => {e.preventDefault(); window.scrollTo({top: document.querySelector('#projects').offsetTop - 100, behavior: 'smooth'})}}>Projects</a>
            <a href="#contact" className="nav-link" onClick={(e) => {e.preventDefault(); window.scrollTo({top: document.querySelector('#contact').offsetTop - 100, behavior: 'smooth'})}}>Contact</a>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Navigation;