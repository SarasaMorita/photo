import React from 'react'
import { useSpring, animated } from 'react-spring'
import RespPage3 from './respPage3'

 const Page3fadein = () => {
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
     <RespPage3/>
    </animated.div>
  )
}

export default Page3fadein