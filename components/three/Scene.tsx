"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function MovingStars() {
  const ref = useRef<Group>(null);
  useFrame(() => {
    if (!ref.current) return;
    // Parallax: rotate + drift the starfield as the page scrolls.
    const s = typeof window !== "undefined" ? window.scrollY : 0;
    ref.current.rotation.y = s * 0.00018;
    ref.current.rotation.x = s * 0.00009;
    ref.current.position.y = s * 0.0011;
  });
  return (
    <group ref={ref}>
      <Stars radius={60} depth={40} count={2200} factor={3.2} saturation={0} fade speed={0.6} />
    </group>
  );
}

function FloatingGem() {
  const group = useRef<Group>(null);
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    // gentle cursor parallax
    if (group.current) {
      const px = state.pointer.x;
      const py = state.pointer.y;
      group.current.rotation.y += (px * 0.4 - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (-py * 0.3 - group.current.rotation.x) * 0.04;
    }
    if (mesh.current) mesh.current.rotation.z += 0.0015;
  });

  return (
    <group ref={group} position={[3.2, 0.6, -1.6]}>
      <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.4}>
        <mesh ref={mesh} scale={1.15}>
          <icosahedronGeometry args={[1, 6]} />
          <MeshDistortMaterial
            color="#5b6cff"
            emissive="#3a1f8f"
            emissiveIntensity={0.35}
            roughness={0.15}
            metalness={0.6}
            distort={0.38}
            speed={1.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[-6, 4, 4]} intensity={120} color="#4f6bff" />
      <pointLight position={[6, -3, 2]} intensity={90} color="#a855f7" />
      <MovingStars />
      <FloatingGem />
    </Canvas>
  );
}
