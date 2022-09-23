// import React from 'react'
import { BarLoader } from 'react-spinners';
import LoadingText from './loadingText';

function Bar() {
  return (
 
    <div >
        <BarLoader
  color="#161717"
  height={20}
  speedMultiplier={0.5}
  width={200}
  cssOverride={{
    marginright: '40vh',
    marginTop:'40vh',
  


  }}
/>
<LoadingText/>

    </div>
   
  )
}



export default Bar