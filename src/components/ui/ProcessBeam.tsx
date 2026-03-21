'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { QuadraticBezierLine } from '@react-three/drei';
import * as THREE from 'three';

export function ProcessBeam({
  start = [0, 0, 0],
  end = [2, 0, 0],
  color = '#cbd5e1', // Slate-300 for universal premium look
  isActive = false,
}: {
  start?: [number, number, number];
  end?: [number, number, number];
  color?: string;
  isActive?: boolean;
}) {
  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    if (ref.current) {
      // Animate dash offset for flow effect
      ref.current.material.dashOffset -= delta * 2;
    }

    // Pulse effect on width if active
    if (ref.current && isActive) {
      ref.current.lineWidth = THREE.MathUtils.lerp(ref.current.lineWidth, 4, 0.1);
    } else if (ref.current) {
      ref.current.lineWidth = THREE.MathUtils.lerp(ref.current.lineWidth, 1, 0.1);
    }
  });

  return (
    <QuadraticBezierLine
      ref={ref}
      start={start}
      end={end}
      mid={[(start[0] + end[0]) / 2, (start[1] + end[1]) / 2, (start[2] + end[2]) / 2]}
      color={color}
      lineWidth={isActive ? 3 : 1}
      dashed={false} // Solid beam for premium look
      transparent
      opacity={isActive ? 0.6 : 0.2}
    />
  );
}
