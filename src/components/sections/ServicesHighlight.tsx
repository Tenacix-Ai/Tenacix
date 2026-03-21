'use client';

import { motion } from 'framer-motion';
import { ServiceExpandGrid } from '@/components/ui/service-expand-card';

export default function ServicesHighlight() {
  return (
    <section
      id="services-highlight"
      className="py-32 text-neutral-900 dark:text-white relative overflow-hidden transition-colors duration-500"
    >
      {/* Ambient Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
            willChange: 'transform',
          }}
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[10%] -right-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
            willChange: 'transform',
          }}
          animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="max-w-[95%] sm:max-w-[90%] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-16 px-2 sm:px-4"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/10 border border-zinc-200 dark:border-white/20 text-[10px] font-mono text-zinc-600 dark:text-zinc-300 uppercase tracking-widest mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="w-1 h-1 rounded-full bg-zinc-500 dark:bg-zinc-300 animate-pulse" />
            Our Expertise
          </motion.span>
          <motion.p
            className="text-3xl md:text-4xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Precision engineering for the{' '}
            <motion.span
              className="text-black dark:text-white inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              autonomous age
            </motion.span>
            .
          </motion.p>
        </motion.div>

        {/* Service Expand Cards Grid */}
        <div className="px-2 sm:px-4 mt-8">
          <ServiceExpandGrid />
        </div>
      </div>
    </section>
  );
}
