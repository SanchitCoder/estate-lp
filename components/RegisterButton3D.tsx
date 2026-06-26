"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import type * as THREE from "three";

function BouncingSphere({
  position,
  color,
  speed,
  size,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  size: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y = position[1] + Math.sin(t) * 0.12;
    ref.current.position.x = position[0] + Math.cos(t * 0.8) * 0.06;
    ref.current.scale.setScalar(1 + Math.sin(t * 1.5) * 0.1);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.35}
        roughness={0.3}
        metalness={0.2}
      />
    </mesh>
  );
}

function PopRing() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    const scale = 1 + (Math.sin(t * 2) * 0.5 + 0.5) * 0.2;
    ref.current.scale.set(scale, scale, 1);
  });

  return (
    <mesh ref={ref} position={[0, 0, -0.5]}>
      <torusGeometry args={[1.8, 0.05, 8, 32]} />
      <meshStandardMaterial
        color="#FF6B6B"
        transparent
        opacity={0.18}
        emissive="#FF2E2E"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

function ButtonScene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[2, 2, 3]} intensity={1} color="#FF8888" />
      <PopRing />
      <BouncingSphere position={[-1.4, 0.2, 0]} color="#FF2E2E" speed={1.6} size={0.1} />
      <BouncingSphere position={[1.3, -0.15, 0.1]} color="#FF6B6B" speed={2} size={0.09} />
      <BouncingSphere position={[0, 0.55, 0]} color="#FFFFFF" speed={1.2} size={0.06} />
    </>
  );
}

interface RegisterButton3DProps {
  label: string;
  onClick: () => void;
}

export default function RegisterButton3D({ label, onClick }: RegisterButton3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0, rootMargin: "100px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative mt-2 min-h-[48px] sm:min-h-[60px]">
      <div
        className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none hidden sm:block"
        aria-hidden
      >
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
          frameloop={visible ? "always" : "never"}
          style={{ background: "transparent", pointerEvents: "none" }}
        >
          <ButtonScene />
        </Canvas>
      </div>

      <motion.button
        type="button"
        onClick={onClick}
        animate={{ scale: [1, 1.04, 1], y: [0, -4, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.97 }}
        className="btn-red gpu-layer relative z-10 w-full min-h-[48px] sm:min-h-[60px] py-3 sm:py-4 px-2 text-[10px] sm:text-sm font-extrabold tracking-wide sm:tracking-widest uppercase rounded-xl leading-tight animate-pulse-red cursor-pointer"
      >
        {label}
      </motion.button>
    </div>
  );
}
