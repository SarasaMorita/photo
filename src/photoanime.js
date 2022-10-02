/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'
import Header from './compornent/header';
import Footer from './compornent/footer';
import Sidebar from './compornent/sidebar';
import { Image, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber';



function Images() {
  const {width,height}=useThree((state)=> state.viewport)
  return (
    <>
    <group>
      
        <Image url="./1.jpg" scale={[1,height,1]} position={[0, 0, 1]} />
        <Image url="./2.jpg" scale={[1,6,6]} position={[1.6, 0, 3]} />
        <Image url="./3.jpg" scale={[1,3.5,1]} position={[2 ,-height, 2]} />
        <Image url="./4.jpg" scale={[1.4, 2, 1]} position={[-1.3,-height,3.2]} />
        <Image url="./5.jpg" scale={[1, 1, 1]} position={[-1,0,4]} />
       
    </group>
    </>
  );
}


function Photoanime() {
    return (
      <>
      <div css={size}>
      <Sidebar/>
      <Header/>
      
      <Canvas>
        <ScrollControls pages={2} damping={3}>
          <Scroll>
           
          
        <Images/>
      
        </Scroll>

        <Scroll html>
          <div css={font}>
            <p>街が、</p>
            <p>私の世界を</p>
            <p>広げてくれた</p>
          </div>
        </Scroll>
        </ScrollControls>
    
      // </Canvas>
    
      <Footer/>
        </div>
      </>
    )
  }

  const size =css({
    
    backgroundColor:'aliceblue',
    width:'100vw',
    height:'100vh',
    margin:'0',
    padding:'0',
    display: 'flex', 
    flexFlow: 'column',
     minHeight: '100vh'
  
  })

  const font =css({
    fontFamily: 'Noto Sans JP',
    fontSize: '4em',
    fontWeight: '400',
    letterSpacing: '0.1em',
    lineHeight: '0.5em',
     margin: '0',
     padding: '0',
     position:'absolute',
     top:'30vh',
     left:'1.5em',
     flexFlow: 'column',
     display: 'flex',
     whiteSpace: 'nowrap',
    
  })
  
  

export default Photoanime