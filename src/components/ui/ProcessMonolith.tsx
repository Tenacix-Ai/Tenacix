'use client';

import React from 'react';
import { Html, Float } from '@react-three/drei';
import { cn } from '@/lib/utils';

interface ProcessMonolithProps {
  title: string;
  description: string;
  stepNumber: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  isActive?: boolean;
}

export function ProcessMonolith({
  title,
  description,
  stepNumber,
  position,
  rotation = [0, 0, 0],
  isActive = false,
}: ProcessMonolithProps) {
  return (
    <group position={position} rotation={rotation}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* 3D Glass Panel Backing using standard mesh for depth/refraction if needed, 
                    but relying on CSS liquid-glass for the visuals is sharper for text. */}

        <Html
          transform
          occlude={false}
          distanceFactor={5}
          style={{ opacity: isActive ? 1 : 0.3, transition: 'opacity 1s ease-in-out' }}
        >
          <div
            className={cn(
              'w-[600px] p-10 rounded-3xl',
              'liquid-glass-card', // Uses the premium utility from globals.css
              'dark:border dark:border-white/10 shadow-2xl', // Only apply border/shadow via Tailwind in dark mode, in light mode use global CSS overrides
              'flex flex-col gap-6',
              'text-left',
            )}
          >
            <div className="flex items-center justify-between relative">
              <span className="text-[12rem] font-black text-transparent absolute -top-24 -left-10 select-none pointer-events-none [-webkit-text-stroke:2px_rgba(0,0,0,0.05)] dark:[-webkit-text-stroke:2px_rgba(255,255,255,0.1)]">
                {stepNumber}
              </span>
            </div>

            <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white dark:to-zinc-400 mt-4">
              {title}
            </h3>

            <p className="text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-[90%]">
              {description}
            </p>
          </div>
        </Html>
      </Float>
    </group>
  );
}
