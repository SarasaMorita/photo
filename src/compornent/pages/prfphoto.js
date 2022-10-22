/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react';
import pic4 from "../../picture/DSC05502.jpg"


function Prfphoto()  {
    
    return (
        
<div css={prfphoto}>
   
     <img src={pic4} alt="pictuere1"  
          width='100%'
          height='auto'
         />    
    
</div>
   );
}

const prfphoto = css({

    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    
})

export default Prfphoto