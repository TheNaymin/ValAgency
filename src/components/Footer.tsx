'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/valagency' },
    { name: 'Instagram', url: 'https://instagram.com/valagency' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/valagency' },
    { name: 'Facebook', url: 'https://facebook.com/valagency' }
  ];

  return (
    <footer id="contact" className="bg-dark text-white py-16">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Val Agency</h3>
            <p className="text-gray-400">
              Transforming ideas into digital reality through creative excellence and innovation.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: contact@valagency.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Creative Street, Digital City, DC 12345</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-primary transition-colors duration-300">Home</a>
              <a href="#services" className="block text-gray-400 hover:text-primary transition-colors duration-300">Services</a>
              <a href="#about" className="block text-gray-400 hover:text-primary transition-colors duration-300">About Us</a>
              <a href="#contact" className="block text-gray-400 hover:text-primary transition-colors duration-300">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Val Agency. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}