
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
    return <animated.div style={styles}>Now Loading....</animated.div>
  }

  export default LoadingText