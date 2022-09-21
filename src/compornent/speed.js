import React, { useState, useEffect } from 'react'
import { useSpring, animated} from 'react-spring'
import Container from './container'

function Speed() {
    const { background, rotateZ } = useSpring({
      from: {
        background: '#46e891',
        rotateZ: 0,
      },
      to: {
        background: '#277ef4',
        rotateZ: 225,
      },
      config: {
        duration: 2000,
        // easing: easings.easeInOutQuart,
      },
      loop: { reverse: true },
    })
  
    return (
      <animated.div
        style={{ background, width: 100, height: 120, borderRadius: 16, rotateZ }}
      >
        <Container/>
      </animated.div>
    )
  }





//  const FadeInCon = () => {
//   const [toggle, setToggle] = useState(false)
//   const styles = useSpring(
  

//     { opacity: toggle ? 1 : 0 })
    


//   const handleToggle = () => {
//     setToggle(_toggle => !_toggle)
//   }

//   useEffect(() => {
//     handleToggle()
//   }, [])

//   return (
//     <animated.div style={styles}>
//      <Container/>
//     </animated.div>
//   )
// }

export default Speed