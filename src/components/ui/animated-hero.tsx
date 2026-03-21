'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => ['Amazing', 'New', 'Wonderful', 'Beautiful', 'Smart'], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <h2 className="bg-gradient-to-br from-white to-gray-400 py-4 bg-clip-text text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-transparent relative z-10 text-center leading-[1.1]">
      Let&apos;s Build Something
      <br />
      <span className="flex items-center justify-center w-full max-w-full">
        <span className="flex-1 flex justify-end pr-[0.15em] sm:pr-[0.2em] overflow-visible">
          <span className="relative h-[1.1em] w-full flex justify-end">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={titles[titleNumber]}
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
                transition={{
                  type: 'spring',
                  stiffness: 70,
                  damping: 15,
                  mass: 0.8,
                }}
                className="absolute right-0 top-0 whitespace-nowrap bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent"
              >
                {titles[titleNumber]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
        <span className="flex-1 flex justify-start pl-[0.15em] sm:pl-[0.2em] whitespace-nowrap">
          <span className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Together
          </span>
        </span>
      </span>
    </h2>
  );
}

export { Hero };
