import React from 'react'
import { useSpring, animated } from 'react-spring'
import Container from './container'

 const FadeInCon = () => {

  const styles = useSpring({
  
    to: [
        { opacity: 1},  
      ],
      from: { opacity: 0},
      config:
      { mass: 1, tension: 280, friction: 300 }
    })

  return (
    <animated.div style={styles}>
     <Container/>
    </animated.div>
  )
}

export default FadeInCon