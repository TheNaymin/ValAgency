'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="section bg-slate-950/95 relative overflow-hidden">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Crafting Digital Excellence
              <span className="text-cyan-400"> Since 2024</span>
            </h2>
            <p className="text-slate-400 text-lg">
              At Val Agency, we're passionate about transforming businesses through innovative digital solutions. Our team of creative professionals combines technical expertise with artistic vision to deliver exceptional results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold animate-puzzle-piece">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-100">Creative Excellence</h3>
                  <p className="text-slate-400">We push boundaries to create unique and impactful digital experiences.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-white font-bold animate-puzzle-piece">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-100">Client-Focused Approach</h3>
                  <p className="text-slate-400">Your success is our priority. We work closely with you to understand and achieve your goals.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-300 rounded-full flex items-center justify-center text-white font-bold animate-puzzle-piece">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-100">Innovation First</h3>
                  <p className="text-slate-400">We stay ahead of digital trends to provide cutting-edge solutions.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-slate-900/50 p-8 rounded-xl shadow-xl border border-slate-800 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-cyan-300 mb-4">Our Impact</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg bg-slate-800/50 animate-puzzle-piece">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
                      <div className="text-slate-400">Projects Completed</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/50 animate-puzzle-piece">
                      <div className="text-3xl font-bold text-cyan-300 mb-2">50+</div>
                      <div className="text-slate-400">Happy Clients</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/50 animate-puzzle-piece">
                      <div className="text-3xl font-bold text-cyan-200 mb-2">5+</div>
                      <div className="text-slate-400">Years Experience</div>
                    </div>
                    <div className="p-4 rounded-lg bg-slate-800/50 animate-puzzle-piece">
                      <div className="text-3xl font-bold text-cyan-100 mb-2">24/7</div>
                      <div className="text-slate-400">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}