import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Float } from "@react-three/drei"
import { useRef } from "react"
import type { Group } from "three"

function CarModel() {
  const car = useRef<Group>(null)

  useFrame((_, delta) => {
    if (car.current) {
      car.current.rotation.y += delta * 0.12
    }
  })

  return (
    <group ref={car} rotation={[0, -0.45, 0]} scale={0.9}>
      <mesh castShadow position={[0, 0.35, 0]}>
        <boxGeometry args={[2.6, 0.45, 1.15]} />
        <meshStandardMaterial color="#1468A8" roughness={0.28} metalness={0.2} />
      </mesh>
      <mesh castShadow position={[0.15, 0.72, 0]}>
        <boxGeometry args={[1.35, 0.5, 0.95]} />
        <meshStandardMaterial color="#0d4169" roughness={0.25} metalness={0.15} />
      </mesh>
      <mesh position={[0.18, 0.74, 0]}>
        <boxGeometry args={[1.05, 0.28, 0.97]} />
        <meshStandardMaterial color="#b9d8e9" transparent opacity={0.82} roughness={0.1} />
      </mesh>
      {[-0.85, 0.85].map((x) =>
        [-0.57, 0.57].map((z) => (
          <mesh key={`${x}-${z}`} castShadow position={[x, 0.05, z]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.28, 0.28, 0.18, 20]} />
            <meshStandardMaterial color="#17202a" roughness={0.7} />
          </mesh>
        )),
      )}
      <mesh position={[1.31, 0.38, -0.32]}>
        <boxGeometry args={[0.04, 0.13, 0.2]} />
        <meshStandardMaterial color="#fff4c2" emissive="#f59e0b" emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[1.31, 0.38, 0.32]}>
        <boxGeometry args={[0.04, 0.13, 0.2]} />
        <meshStandardMaterial color="#fff4c2" emissive="#f59e0b" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

export default function Car3D() {
  return (
    <div className="pointer-events-none h-36 w-48" aria-hidden="true">
      <Canvas camera={{ position: [3.4, 2.2, 4.2], fov: 36 }} dpr={[1, 1.5]}>
        <ambientLight intensity={1.4} />
        <directionalLight position={[3, 5, 4]} intensity={2} />
        <Float speed={1.2} rotationIntensity={0.04} floatIntensity={0.18}>
          <CarModel />
        </Float>
        <ContactShadows position={[0, -0.3, 0]} opacity={0.22} scale={4} blur={2} />
      </Canvas>
    </div>
  )
}
