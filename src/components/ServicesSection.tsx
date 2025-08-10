'use client';

import { motion } from 'framer-motion';
import { VideoCameraIcon, CodeBracketIcon, ChatBubbleBottomCenterTextIcon, FilmIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Video Editing',
    description: 'Professional video editing services that bring your stories to life with cutting-edge techniques and creative transitions.',
    icon: VideoCameraIcon
  },
  {
    title: 'Website Development',
    description: 'Custom website solutions built with modern technologies, focusing on performance, user experience, and responsive design.',
    icon: CodeBracketIcon
  },
  {
    title: 'Social Media Management',
    description: 'Strategic social media management to grow your brand presence and engage with your target audience effectively.',
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    title: 'Video Production',
    description: 'Full-service video production including outdoor shoots, professional equipment, and expert cinematography.',
    icon: FilmIcon
  },
  {
    title: 'Logo & Asset Design',
    description: 'Creative design services for logos, brand assets, and visual materials that make your brand stand out.',
    icon: PaintBrushIcon
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-slate-950">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">Our Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-900/50 p-6 rounded-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 backdrop-blur-sm border border-slate-800 group cursor-pointer animate-puzzle-piece">
                <div className="flex items-center justify-center mb-6">
                  <service.icon className="h-12 w-12 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-cyan-100 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary inline-block">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
}