'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import { ProcessMonolith } from '@/components/ui/ProcessMonolith';
import { useTheme } from 'next-themes';

const steps = [
  {
    title: 'AUDIT',
    description: 'Deep archival analysis. We map your entire digital ecosystem.',
    stepNumber: '01',
    position: new THREE.Vector3(-2, 0, -15),
  },
  {
    title: 'DESIGN',
    description: 'Architecting the future using liquid-glass fidelity and motion.',
    stepNumber: '02',
    position: new THREE.Vector3(2, 1, -30),
  },
  {
    title: 'BUILD',
    description: 'Rigorous engineering. High-performance code meeting premium aesthetics.',
    stepNumber: '03',
    position: new THREE.Vector3(-2, -1, -45),
  },
  {
    title: 'SCALE',
    description: 'Deploying autonomous agents to monitor and expand your reach.',
    stepNumber: '04',
    position: new THREE.Vector3(0, 0, -60),
  },
];

function InfiniteCanvasScene({
  scrollRef,
  isDark,
}: {
  scrollRef: React.MutableRefObject<number>;
  isDark: boolean;
}) {
  const { camera } = useThree();

  // Define exact start and end points
  const startPos = new THREE.Vector3(0, 1, 5);
  const endPos = new THREE.Vector3(0, 0, -70);

  // Create a smooth curve passing through all steps
  const curve = useMemo(() => {
    const points = [startPos, ...steps.map((s) => s.position), endPos];
    return new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.5); // Smoother tension
  }, []);

  useFrame((state, delta) => {
    const scrollOffset = scrollRef.current;
    const clampedOffset = Math.max(0, Math.min(1, scrollOffset));

    const point = curve.getPointAt(clampedOffset);
    const tangent = curve.getTangentAt(clampedOffset);

    // Smooth camera movement
    // Position camera behind the point, but tighter
    const camPos = point.clone().sub(tangent.clone().multiplyScalar(2));

    // Use a slightly faster lerp (0.08) to reduce sluggishness
    camera.position.lerp(camPos, 0.08);

    // Look ahead
    const lookAtOffset = Math.min(clampedOffset + 0.1, 1);
    const lookAtPoint = curve.getPointAt(lookAtOffset);

    const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(
      new THREE.Matrix4().lookAt(camera.position, lookAtPoint, new THREE.Vector3(0, 1, 0)),
    );
    camera.quaternion.slerp(targetQuaternion, 0.08);
  });

  return (
    <>
      <ambientLight intensity={isDark ? 0.2 : 0.5} />
      <pointLight
        position={[10, 10, 10]}
        intensity={isDark ? 1 : 1.5}
        color={isDark ? '#aaa' : '#fff'}
      />
      <fog attach="fog" args={[isDark ? '#000' : '#ffffff', 5, 50]} />

      {/* Stars for depth */}
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      {/* Dark stars for light mode? Stars component doesn't support color prop easily, it uses white points. 
                We can use a different background or color. 
                Actually Stars from drei has no color prop for the stars themselves commonly, they are white. 
                In light mode white stars on white fog won't be visible. 
                We can invert the scene or use a dark points material. 
                But Stars is simple. 
                Let's stick to simple fog for now. 
                If we want stars in light mode, we need custom points. 
                For now, let's hide Stars in light mode or just use them in dark. 
            */}
      {isDark && (
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
      )}

      {/* Render Monoliths */}
      {steps.map((step, index) => (
        <ProcessMonolith
          key={step.stepNumber}
          title={step.title}
          description={step.description}
          stepNumber={step.stepNumber}
          position={[step.position.x, step.position.y, step.position.z]}
          rotation={[0, index % 2 === 0 ? 0.2 : -0.2, 0]}
          isActive={true}
        />
      ))}
    </>
  );
}

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === 'dark';

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Update the ref for R3F to consume without re-renders
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    scrollRef.current = latest;
  });

  return (
    <section
      id="process"
      ref={containerRef}
      className="h-[400vh] w-full relative bg-white dark:bg-black transition-colors duration-500"
    >
      {/* Sticky container for the 3D Canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white via-white/50 to-transparent dark:from-black dark:via-black/50 z-20 pointer-events-none" />

        {/* Re-introduced Standard DOM Title for crispness */}
        <div className="absolute top-10 sm:top-20 left-0 w-full text-center z-10 pointer-events-none mix-blend-difference dark:mix-blend-normal">
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-black dark:text-white tracking-tighter uppercase opacity-90 drop-shadow-2xl">
            Our Process.
          </h2>
        </div>

        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }}>
          <InfiniteCanvasScene scrollRef={scrollRef} isDark={isDark} />
        </Canvas>
      </div>
    </section>
  );
}
