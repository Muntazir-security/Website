
import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const ParticleField = ({ count = 1000 }) => {
  const points = useRef();
  
  // Generate random particles in a sphere
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Position in a sphere
      const radius = Math.random() * 1.5 + 0.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);
      
      // Colors (cybersecurity theme - blues and purples)
      colors[i3] = 0.5 + Math.random() * 0.3;      // R: low-mid
      colors[i3 + 1] = 0.5 + Math.random() * 0.3;  // G: low-mid 
      colors[i3 + 2] = 0.8 + Math.random() * 0.2;  // B: high (blue dominant)
    }
    
    return {
      positions,
      colors
    };
  }, [count]);
  
  // Animation: rotate the field slowly
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      points.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    }
  });
  
  return (
    <Points ref={points} positions={particles.positions} colors={particles.colors} stride={3}>
      <PointMaterial 
        transparent
        vertexColors
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const ParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 2], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleField count={2000} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
