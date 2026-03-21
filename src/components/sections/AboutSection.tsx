'use client';

import { motion } from 'framer-motion';

import { SplineScene } from '@/components/ui/splite';

const features = [
  {
    title: 'Cognitive Architecture',
    description:
      'We architect digital ecosystems that think. Scalable, self-correcting design systems built for the next decade of web evolution.',
  },
  {
    title: 'Visual Intelligence',
    description:
      'Design that speaks before you do. We craft distinct aesthetic identities that command authority and dissolve competition.',
  },
  {
    title: 'Neural Operations',
    description:
      'Silence the noise. Autonomous AI agents that handle complex workflows, support, and sales while you sleep.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative overflow-visible">
      {/* Expanded max-width constraint to utilize large monitors better */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center xl:items-start justify-between">
          {/* Left side - Content */}
          <div className="flex-1 min-w-0 max-w-4xl w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-6">
                <span className="w-1 h-1 rounded-full bg-zinc-400 animate-pulse" />
                What We Do
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl 2xl:text-9xl font-bold text-zinc-900 dark:text-white tracking-tight mb-4 whitespace-nowrap">
                About Us.
              </h2>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We are the architects of the{' '}
                <motion.span
                  className="text-black dark:text-white inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  new digital frontier
                </motion.span>
                , blending cognitive intelligence with{' '}
                <motion.span
                  className="text-black dark:text-white inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  immersive design
                </motion.span>
                .
              </motion.p>
            </motion.div>

            {/* Feature List - Clean Minimal Design */}
            <div className="space-y-0">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="py-10 border-t border-zinc-200 dark:border-zinc-800">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors duration-300 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              {/* Bottom Border */}
              <div className="border-t border-zinc-200 dark:border-zinc-800" />
            </div>
          </div>

          {/* Right side - Spline Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 100, filter: 'brightness(0.5) blur(10px)' }}
            whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'brightness(1) blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full xl:w-[800px] 2xl:w-[900px] h-[450px] sm:h-[600px] xl:h-[800px] relative xl:sticky xl:top-32 flex-shrink-0 max-w-[100vw] xl:max-w-none pointer-events-none ml-0"
            style={{
              maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
            }}
          >
            {/* Ambient Context Light - Enhanced Flare */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-zinc-300/20 dark:bg-white/10 blur-[100px] rounded-full"
            />

            <div className="w-full h-full absolute inset-0 pointer-events-auto">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
