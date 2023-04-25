import React, { Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float>
      <ambientLight intensity={2} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1,1]} />

      </mesh>
      
    </Float> 
  )
}

const BallCanvas = ({ icon }) => {
  return (
    <Canvas 
      frameloop='demand'
      gl={{ preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} />
          <Ball imgUrl={icon} />

      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default BallCanvas