import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
  
    try {
      const response = await emailjs.send(
        'service_o9mavts',
        'template_4eepx8p',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ahmad.khoder.edu@gmail.com'
        },
        '3nggAnEm30y1II_Lr'
      );
  
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-military-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold font-display md:text-4xl">
              Let's Connect
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Interested in collaboration? Let's discuss how my unique background
              can benefit your team.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-military-500/30 focus:ring-2 focus:ring-primary-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-military-500/30 focus:ring-2 focus:ring-primary-500"
                  required
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows="6"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md dark:border-gray-700 dark:bg-military-500/30 focus:ring-2 focus:ring-primary-500"
                required
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-8 py-3 font-medium text-white transition-colors rounded-md bg-primary-600 hover:bg-primary-700"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p className="mt-4 text-green-600">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-red-600">Error sending message. Please try again.</p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
