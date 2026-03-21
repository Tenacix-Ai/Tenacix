'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export function ProcessCore({ activeStep }: { activeStep: number }) {
  const outerRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.y += delta * 0.2;
      outerRef.current.rotation.z += delta * 0.1;
    }
    if (innerRef.current) {
      // Pulse effect based on active step
      const targetScale = 1 + activeStep * 0.2;
      innerRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  // Dynamic colors based on step
  const colors = [
    '#06b6d4', // Cyan (Analyze)
    '#8b5cf6', // Violet (Architect)
    '#10b981', // Emerald (Deploy)
  ];
  const activeColor = colors[activeStep] || colors[0];

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group ref={outerRef}>
        {/* Outer Kinetic Ring */}
        <TorusKnot args={[1, 0.3, 128, 16]} scale={1.2}>
          <MeshDistortMaterial
            color={activeColor}
            emissive={activeColor}
            emissiveIntensity={0.5}
            roughness={0.1}
            metalness={0.8}
            distort={0.4}
            speed={2}
          />
        </TorusKnot>

        {/* Inner Core */}
        <Sphere ref={innerRef} args={[0.6, 64, 64]}>
          <meshStandardMaterial
            color="white"
            emissive="white"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </Sphere>

        {/* Orbital Particles */}
        <Points activeColor={activeColor} />
      </group>
    </Float>
  );
}

function Points({ activeColor }: { activeColor: string }) {
  const ref = useRef<THREE.Points>(null);
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.4;
    }
  });

  // Generate random points on a sphere surface (simplified)
  const count = 200;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const r = 2.5 + Math.random() * 0.5;
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color={activeColor} transparent opacity={0.8} sizeAttenuation />
    </points>
  );
}
