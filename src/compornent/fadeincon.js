import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import Container from './container'

 const FadeInCon = () => {
//   const [toggle, setToggle] = useState(false)
  const styles = useSpring({
  
    to: [
        { opacity: 1},
        // { opacity: 0, color: 'rgb(14,26,19)' },
      ],
      from: { opacity: 0},
    //   delay: 100,
      config:
      {   mass: 1, tension: 280, friction: 300 }
            

    // }
    })
    // { opacity: toggle ? 1 : 0 })
    


//   const handleToggle = () => {
//     setToggle(_toggle => !_toggle)
//   }

//   useEffect(() => {
//     handleToggle()
//   }, [])

  return (
    <animated.div style={styles}>
     <Container/>
    </animated.div>
  )
}

export default FadeInCon