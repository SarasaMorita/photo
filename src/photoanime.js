/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'

import { Image } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';



function Images() {
  return (
    <>
    <group>
        <Image url="./1.jpg" scale={[4,10,9]} />
    </group>
    </>
  );
}

function Photoanime() {
    return (
      <>
      <Canvas>
        <Images/>
      </Canvas>
      </>
    )
  }
export default Photoanime