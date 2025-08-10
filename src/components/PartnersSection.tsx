'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Partner 1', logo: '/logos/cpplogo.svg' },
  { name: 'Partner 2', logo: '/logos/java.svg' },
  { name: 'Partner 3', logo: '/logos/github.svg' },
  { name: 'Partner 4', logo: '/logos/php.svg' },
];

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-slate-950/95 relative overflow-hidden">
      <div className="container-custom mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Strategic Partners
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Collaborating with leading technology partners to deliver exceptional solutions.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group p-8 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-px rounded-xl bg-slate-950/90 backdrop-blur-xl" />
              <div className="absolute inset-0 border border-transparent bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative aspect-square flex items-center justify-center">
                <div className="relative w-24 h-24 transition-all duration-300 group-hover:opacity-0">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain opacity-70 group-hover:opacity-0 transition-all duration-300"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold text-2xl">
                    {partner.name}
                  </span>
                </div>
              </div>
              <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}