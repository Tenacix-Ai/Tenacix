'use client';

import type React from 'react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useTheme } from 'next-themes';

interface ServiceExpandCardProps {
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  accentRgb: string;
  icon: React.ReactNode;
  expandedVisual: React.ReactNode;
  statusLabel?: string;
  className?: string;
}

function ServiceExpandCard({
  title,
  subtitle,
  description,
  accentColor,
  accentRgb,
  icon,
  expandedVisual,
  statusLabel = 'Active',
  className,
}: ServiceExpandCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === 'dark';

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-100, 100], [6, -6]);
  const rotateY = useTransform(mouseX, [-100, 100], [-6, 6]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative cursor-pointer select-none ${className}`}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Transparent click overlay — sits flat (no 3D transform) so clicks always register */}
      <div className="absolute inset-0 z-30 cursor-pointer" onClick={handleClick} />
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-white/95 dark:bg-black/80 border border-zinc-200 dark:border-white/10 backdrop-blur-xl"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          height: isExpanded
            ? window.innerWidth < 640
              ? 460
              : 420
            : window.innerWidth < 640
              ? 240
              : 220,
          borderColor: isExpanded
            ? `rgba(${accentRgb}, 0.3)`
            : isDark
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(0,0,0,0.1)',
        }}
        whileHover={{
          borderColor: `rgba(${accentRgb}, 0.25)`,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 35,
        }}
      >
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02]" />

        {/* Expanded visual */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-neutral-950" />
              {expandedVisual}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid pattern - only show when collapsed */}
        <motion.div
          className="absolute inset-0 opacity-[0.02]"
          animate={{ opacity: isExpanded ? 0 : 0.02 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id={`grid-${title}`} width="24" height="24" patternUnits="userSpaceOnUse">
                <path
                  d="M 24 0 L 0 0 0 24"
                  fill="none"
                  stroke={isDark ? 'white' : 'black'}
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${title})`} />
          </svg>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          {/* Top section */}
          <div className="flex items-start justify-between">
            <div className="relative">
              <motion.div
                className="relative"
                animate={{
                  opacity: isExpanded ? 0.5 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{
                    filter: isHovered
                      ? `drop-shadow(0 0 8px rgba(${accentRgb}, 0.6))`
                      : `drop-shadow(0 0 4px rgba(${accentRgb}, 0.3))`,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {icon}
                </motion.div>
              </motion.div>
            </div>

            {/* Status indicator */}
            <motion.div
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/5"
              animate={{
                scale: isHovered ? 1.05 : 1,
                backgroundColor: isDark
                  ? isHovered
                    ? 'rgba(255,255,255,0.08)'
                    : 'rgba(255,255,255,0.05)'
                  : isHovered
                    ? 'rgba(0,0,0,0.08)'
                    : 'rgba(0,0,0,0.05)',
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
              <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 tracking-wide uppercase">
                {statusLabel}
              </span>
            </motion.div>
          </div>

          {/* Bottom section */}
          <div className="space-y-1.5">
            <motion.div
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <h3 className="text-zinc-900 dark:text-white font-semibold text-lg tracking-tight leading-tight">
                {title}{' '}
                <span className="text-zinc-500 dark:text-zinc-400 font-light">{subtitle}</span>
              </h3>
            </motion.div>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, y: -10, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: -10, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Animated underline */}
            <motion.div
              className="h-px"
              style={{
                background: `linear-gradient(to right, ${accentColor}80, ${accentColor}40, transparent)`,
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{
                scaleX: isHovered || isExpanded ? 1 : 0.3,
              }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Click hint */}
      <motion.p
        className="absolute -bottom-6 left-1/2 text-[10px] text-zinc-500 whitespace-nowrap"
        style={{ x: '-50%' }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered && !isExpanded ? 1 : 0,
          y: isHovered ? 0 : 4,
        }}
        transition={{ duration: 0.2 }}
      >
        Click to expand
      </motion.p>
    </motion.div>
  );
}

/* ─── Expanded Visuals for Each Service ─── */

function WebDevExpandedVisual() {
  return (
    <>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* Circuit board / network lines */}
        <motion.line
          x1="0%"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="rgba(99,102,241,0.3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.line
          x1="0%"
          y1="60%"
          x2="100%"
          y2="60%"
          stroke="rgba(99,102,241,0.25)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.line
          x1="25%"
          y1="0%"
          x2="25%"
          y2="100%"
          stroke="rgba(99,102,241,0.2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.line
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          stroke="rgba(99,102,241,0.2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.line
          x1="75%"
          y1="0%"
          x2="75%"
          y2="100%"
          stroke="rgba(99,102,241,0.15)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
        {/* Grid dots */}
        {[20, 40, 60, 80].map((y, i) =>
          [20, 40, 60, 80].map((x, j) => (
            <motion.circle
              key={`${i}-${j}`}
              cx={`${x}%`}
              cy={`${y}%`}
              r="2"
              fill="rgba(99,102,241,0.4)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + (i * 4 + j) * 0.04 }}
            />
          )),
        )}
      </svg>
      {/* Floating UI elements */}
      <motion.div
        className="absolute top-[15%] left-[8%] w-[30%] h-[20%] rounded-lg bg-indigo-500/10 border border-indigo-500/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <div className="p-2 space-y-1">
          <div className="h-1 w-3/4 bg-indigo-400/40 rounded-full" />
          <div className="h-1 w-1/2 bg-indigo-400/20 rounded-full" />
        </div>
      </motion.div>
      <motion.div
        className="absolute top-[40%] right-[8%] w-[25%] h-[25%] rounded-lg bg-cyan-500/10 border border-cyan-500/20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        <div className="p-2 flex items-end h-full gap-0.5">
          {[40, 65, 35, 80, 55].map((h, i) => (
            <div key={i} className="flex-1 bg-cyan-400/30 rounded-t" style={{ height: `${h}%` }} />
          ))}
        </div>
      </motion.div>
      {/* Code bracket icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.3 }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 0 12px rgba(99,102,241, 0.5))' }}
        >
          <path
            d="M8 3L3 12L8 21"
            stroke="#818CF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 3L21 12L16 21"
            stroke="#818CF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </>
  );
}

function AIAgentsExpandedVisual() {
  return (
    <>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* Neural network connections */}
        <motion.line
          x1="20%"
          y1="25%"
          x2="50%"
          y2="50%"
          stroke="rgba(52,211,153,0.3)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <motion.line
          x1="80%"
          y1="25%"
          x2="50%"
          y2="50%"
          stroke="rgba(52,211,153,0.3)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
        <motion.line
          x1="50%"
          y1="50%"
          x2="20%"
          y2="75%"
          stroke="rgba(52,211,153,0.25)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.line
          x1="50%"
          y1="50%"
          x2="80%"
          y2="75%"
          stroke="rgba(52,211,153,0.25)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.line
          x1="35%"
          y1="35%"
          x2="65%"
          y2="35%"
          stroke="rgba(52,211,153,0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
        <motion.line
          x1="35%"
          y1="65%"
          x2="65%"
          y2="65%"
          stroke="rgba(52,211,153,0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        />
        {/* Neural nodes */}
        {[
          [20, 25],
          [80, 25],
          [50, 50],
          [20, 75],
          [80, 75],
          [35, 35],
          [65, 35],
          [35, 65],
          [65, 65],
        ].map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={`${x}%`}
            cy={`${y}%`}
            r={i === 2 ? '5' : '3'}
            fill={i === 2 ? 'rgba(52,211,153,0.6)' : 'rgba(52,211,153,0.35)'}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
          />
        ))}
      </svg>
      {/* Central brain icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.3 }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 0 12px rgba(52,211,153, 0.5))' }}
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            fill="rgba(52,211,153,0.15)"
            stroke="#34D399"
            strokeWidth="1.5"
          />
          <path
            d="M8 14s1.5 2 4 2 4-2 4-2"
            stroke="#34D399"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="9" cy="10" r="1" fill="#34D399" />
          <circle cx="15" cy="10" r="1" fill="#34D399" />
        </svg>
      </motion.div>
      {/* Floating chat bubbles */}
      <motion.div
        className="absolute top-[15%] right-[10%] px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
          <div
            className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </motion.div>
    </>
  );
}

function BrandingExpandedVisual() {
  return (
    <>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* Geometric design lines */}
        <motion.circle
          cx="50%"
          cy="50%"
          r="60"
          fill="none"
          stroke="rgba(244,114,182,0.25)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.circle
          cx="50%"
          cy="50%"
          r="90"
          fill="none"
          stroke="rgba(244,114,182,0.15)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />
        <motion.line
          x1="20%"
          y1="20%"
          x2="80%"
          y2="80%"
          stroke="rgba(244,114,182,0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        />
        <motion.line
          x1="80%"
          y1="20%"
          x2="20%"
          y2="80%"
          stroke="rgba(244,114,182,0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        />
      </svg>
      {/* Color swatches */}
      <motion.div
        className="absolute top-[12%] left-[8%] flex gap-1"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {['#F472B6', '#A78BFA', '#FB923C', '#38BDF8'].map((color, i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-sm border border-white/10"
            style={{ backgroundColor: color }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 + i * 0.08 }}
          />
        ))}
      </motion.div>
      {/* Central logo mark */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.3 }}
      >
        <div
          className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center"
          style={{ filter: 'drop-shadow(0 0 14px rgba(244,114,182, 0.4))' }}
        >
          <span className="text-white font-bold text-sm tracking-widest">TX</span>
        </div>
        <div className="absolute -inset-2 border border-dashed border-pink-500/30 rounded-xl" />
      </motion.div>
      {/* Typography preview */}
      <motion.div
        className="absolute bottom-[18%] right-[8%] space-y-1"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        <div className="h-1.5 w-16 bg-pink-400/30 rounded-full" />
        <div className="h-1 w-12 bg-pink-400/15 rounded-full" />
      </motion.div>
    </>
  );
}

function AutomationExpandedVisual() {
  return (
    <>
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        {/* Workflow pipeline */}
        <motion.line
          x1="10%"
          y1="50%"
          x2="90%"
          y2="50%"
          stroke="rgba(251,146,60,0.3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        <motion.line
          x1="50%"
          y1="20%"
          x2="50%"
          y2="80%"
          stroke="rgba(251,146,60,0.2)"
          strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        {/* Branch paths */}
        <motion.path
          d="M 50% 50% Q 65% 30%, 80% 30%"
          fill="none"
          stroke="rgba(251,146,60,0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.path
          d="M 50% 50% Q 65% 70%, 80% 70%"
          fill="none"
          stroke="rgba(251,146,60,0.2)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        />
      </svg>
      {/* Workflow nodes */}
      <motion.div
        className="absolute top-[45%] left-[8%] w-8 h-8 rounded-full bg-orange-500/15 border border-orange-500/30 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <div className="w-3 h-3 rounded-full bg-orange-400/60" />
      </motion.div>
      <motion.div
        className="absolute top-[45%] left-[35%] w-10 h-8 rounded-lg bg-zinc-800 border border-orange-500/20 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
      >
        <div className="w-5 h-1 bg-orange-400/40 rounded" />
      </motion.div>
      {/* Central gear icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20, delay: 0.3 }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-lg"
          style={{ filter: 'drop-shadow(0 0 12px rgba(251,146,60, 0.5))' }}
        >
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="#FB923C" strokeWidth="1.5" />
          <path
            d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
            stroke="#FB923C"
            strokeWidth="1.5"
            fill="rgba(251,146,60,0.1)"
          />
        </svg>
      </motion.div>
      {/* End nodes */}
      <motion.div
        className="absolute top-[25%] right-[10%] w-7 h-7 rounded bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className="w-3 h-1 bg-emerald-400/60 rounded" />
      </motion.div>
      <motion.div
        className="absolute top-[65%] right-[10%] w-7 h-7 rounded bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.7 }}
      >
        <div className="w-3 h-1 bg-emerald-400/60 rounded" />
      </motion.div>
    </>
  );
}

/* ─── Icons ─── */

function CodeIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#818CF8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#34D399"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.5 2.1-1.3 2.8L12 12l-2.7-3.2C8.5 8.1 8 7.1 8 6a4 4 0 0 1 4-4Z" />
      <path d="M12 12v10" />
      <path d="M8 18h8" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F472B6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="10.5" r="2.5" />
      <circle cx="8.5" cy="7.5" r="2.5" />
      <circle cx="6.5" cy="12.5" r="2.5" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2Z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FB923C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

/* ─── Service Data ─── */

const servicesConfig = [
  {
    title: 'Web',
    subtitle: 'Development',
    description:
      'Modern, responsive, and performant web applications built with cutting-edge frameworks. From landing pages to full-stack platforms, engineered for scale.',
    accentColor: '#818CF8',
    accentRgb: '129,140,248',
    icon: <CodeIcon />,
    expandedVisual: <WebDevExpandedVisual />,
    statusLabel: 'Scalable',
  },
  {
    title: 'AI',
    subtitle: 'Agents',
    description:
      'Autonomous agents powered by custom LLMs that work 24/7. Handling customer inquiries, automating workflows, and making data-driven decisions.',
    accentColor: '#34D399',
    accentRgb: '52,211,153',
    icon: <BrainIcon />,
    expandedVisual: <AIAgentsExpandedVisual />,
    statusLabel: 'Autonomous',
  },
  {
    title: 'Brand',
    subtitle: 'Identity',
    description:
      'Distinctive visual identities that leave a lasting mark. From logo design to comprehensive brand systems, crafted with precision and purpose.',
    accentColor: '#F472B6',
    accentRgb: '244,114,182',
    icon: <PaletteIcon />,
    expandedVisual: <BrandingExpandedVisual />,
    statusLabel: 'Creative',
  },
  {
    title: 'Work',
    subtitle: 'Automation',
    description:
      'Streamline workflows, eliminate repetitive tasks, and save valuable time. Custom integrations and intelligent pipelines that scale with your business.',
    accentColor: '#FB923C',
    accentRgb: '251,146,60',
    icon: <GearIcon />,
    expandedVisual: <AutomationExpandedVisual />,
    statusLabel: 'Efficient',
  },
];

/* ─── Main Grid Export ─── */

export function ServiceExpandGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1200px] mx-auto">
      {servicesConfig.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ServiceExpandCard {...service} />
        </motion.div>
      ))}
    </div>
  );
}

export { ServiceExpandCard };
