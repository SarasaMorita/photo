import Page2 from "./pages/page2";
import { useSpring, animated,  } from 'react-spring';

const Page2Fade = () => {
   
      const styles = useSpring({
      
        to: [
            { opacity: 1},
            
          ],
          from: { opacity: 0},
        
          config:
          {   mass: 1, tension: 280, friction: 300 }
                
    
        
        })
        
    
    
    
    
      return (
        <animated.div style={styles}>
         <Page2/>
        </animated.div>
      )
    }
    
    export default Page2Fade