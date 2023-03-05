import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Preload,
  Float,
  OrbitControls,
  useTexture,
  Sphere,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={1.75} floatIntensity={2} rotationIntensity={1}>
      <mesh castShadow receiveShadow scale={2.75}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[0, 0, 0.05]} />
        {/* <icosahedronGeometry args={[1, 1]} /> */}
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial
            color={"#fff8eb"}
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
          />
          <Decal
            map={decal}
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            flatShading
          />
        </Sphere>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      className="cursor-pointer"
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enableRotate />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
