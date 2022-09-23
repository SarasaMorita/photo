/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'
import { useSpring, animated } from 'react-spring'


function LoadingText() {
    const styles = useSpring({
      loop: true,
      to: [
        { opacity: 1, color: '#252828' },
        { opacity: 0, color: '#000000' },
      ],
      from: { opacity: 0, color: '#FFFFFF' },
    })
    // ...
    return (
    <div css={center}>
    <animated.div style={styles}>Now Loading....</animated.div>
    </div>
    
    )
  }

  const center =css({
  marginTop:'10vh',
  marginLeft:'5vh',
  fontSize: "calc(20px + 2vmin)",
  })

  export default LoadingText