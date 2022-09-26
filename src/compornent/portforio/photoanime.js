import React from 'react';
import { Image } from '@react-three/drei'
import { Canvas } from 'react-three-fiber';


function Images() {
  return (
    <>
    <group>
        <Image url="./DSC00267.jpg" scale={[4,1,1]} />
    </group>
    </>
  );
}

function Photoanime() {
    return (
      <>
      <Canvas>
          <Images />
      </Canvas>
      </>
    )
  }
export default Photoanime