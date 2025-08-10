'use client';

import { motion } from 'framer-motion';
import { LampContainer } from './ui/lamp';

export default function HeroSection() {
  return (
    <section id="home" className="section relative min-h-screen bg-slate-950">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="mt-8 bg-gradient-to-br from-cyan-400 to-cyan-600 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          Transforming Ideas <br /> into Digital Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-center text-slate-300 text-lg max-w-2xl"
        >
          We create stunning websites, engaging videos, and compelling content that helps your brand stand out in the digital landscape.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#services"
            className="px-8 py-3 rounded-md border-2 border-cyan-500 text-cyan-400 font-medium hover:bg-cyan-500 hover:text-white transition-colors"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-md bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </LampContainer>
    </section>
  );
}