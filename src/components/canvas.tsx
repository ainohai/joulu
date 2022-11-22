import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as React from 'react'
import { random } from 'maath'
import { Points, PointMaterial } from '@react-three/drei'
import Stats from 'three/examples/jsm/libs/stats.module'

function Stars(props) {
  const ref: React.MutableRefObject<THREE.Mesh> = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= -1 * delta / 50
    ref.current.rotation.y -= delta / 150
  })

  return (
    <group rotation={[0, 0, Math.PI / 40]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#aaa0f0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}

export default function WinterCanvas() {

  return (
    <Canvas camera={{ position: [0, 0, 1] }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <fog attach="fog" args={['blue', 0.6, 3]} />
      <Stars />
    </Canvas>
  )
}


