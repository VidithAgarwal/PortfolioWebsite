import React from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import Loader from '../Loader'
import { Canvas } from '@react-three/fiber'


const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

const Earth = () => {

  const earth = useGLTF("./planet/scene.gltf")
  return (
    <primitive
      object={earth.scene}
      scale={2.3}
      position-y={0}
      rotation-x={0}
      rotation-y={2}
    />
  )
}

export default EarthCanvas