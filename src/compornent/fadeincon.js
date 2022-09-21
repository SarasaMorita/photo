import React, { useState, useEffect } from 'react'
import { useSpring, animated, config } from 'react-spring'
import Container from './container'

 const FadeInCon = () => {
  const [toggle, setToggle] = useState(false)
  const styles = useSpring(
  

    { opacity: toggle ? 1 : 0 })
    


  const handleToggle = () => {
    setToggle(_toggle => !_toggle)
  }

  useEffect(() => {
    handleToggle()
  }, [])

  return (
    <animated.div style={styles}>
     <Container/>
    </animated.div>
  )
}

export default FadeInCon