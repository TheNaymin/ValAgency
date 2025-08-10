'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const customers = [
  { name: 'Customer 1', logo: '/logos/bash.svg' },
  { name: 'Customer 2', logo: '/logos/html5.svg' },
  { name: 'Customer 3', logo: '/logos/css.svg' },
  { name: 'Customer 4', logo: '/logos/gologo.svg' },
  { name: 'Customer 5', logo: '/logos/node.svg' },
];

export default function CustomersSection() {
  return (
    <section id="customers" className="py-24 bg-slate-900/95 relative overflow-hidden">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We're proud to work with companies that are shaping the future of digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {customers.map((customer, index) => (
            <motion.div
              key={customer.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative p-6 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-px rounded-xl bg-slate-900/90 backdrop-blur-xl"></div>
                <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative aspect-video flex items-center justify-center">
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={120}
                    height={60}
                    className="opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold text-xl group-hover:text-2xl transition-all duration-300">
                      {customer.name}
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}