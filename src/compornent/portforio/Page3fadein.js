import React from 'react'
import { useSpring, animated } from 'react-spring'
import RespPage3 from './respPage3'

 const Page3fadein = () => {
  const styles = useSpring({
  
    to: [
        { opacity: 1}
      ],
      from: { opacity: 0},
      config:
      {   mass: 1, tension: 280, friction: 300 }
  
    })
   

  return (
    <animated.div style={styles}>
     <RespPage3/>
    </animated.div>
  )
}

export default Page3fadein