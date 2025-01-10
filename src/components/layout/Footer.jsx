const Footer = () => {
    return (
      <footer className="bg-military-900 text-white">
        <div className="section-container py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-xl font-bold mb-4">PILOT.DEV</h3>
              <p className="text-gray-400">
                Bridging the gap between military precision and software development.
              </p>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-primary-400">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-primary-400">Experience</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-primary-400">Projects</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-primary-400">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><a href="https://github.com/yourusername" className="text-gray-400 hover:text-primary-400">GitHub</a></li>
                <li><a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-primary-400">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} PILOT.DEV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;