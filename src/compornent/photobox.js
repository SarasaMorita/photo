/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'
import pic1 from  "../picture/DSC05820.jpg";
import pic2 from  "../picture/DSC05838+.JPG";
import pic3 from  "../picture/DSC05849++.JPG";
import pic4 from "../picture/P8205103+.JPG"
import pic5 from "../picture/DSC04872+WEB.jpg";
import pic6 from "../picture/DSC05280+WEB.jpg";


function Photobox()  {
    
    return (
<div css={photobox}>
     <div css={item}>
     <img src={pic1} alt="pictuere1"  
          width='100%'
          height='auto'
         /> 
    </div>     
    
    <div css={item}> 
    <img src={pic2} alt="pictuere2" 
           width='100%'
           height='auto'/>
    </div>  
    <div css={item}> 
    <img src={pic3} alt="pictuere3" 
          width='100%'
          height='auto'/>
    </div>  

    <div css={item}> 
    <img src={pic4} alt="pictuere3" 
          width='100%'
          height='auto'/>
    </div>  
    <div css={item}> 
    <img src={pic5} alt="pictuere3" 
          width='100%'
          height='auto'/>
    </div>  

    <div css={item}> 
    <img src={pic6} alt="pictuere3" 
          width='100%'
          height='auto'/>
    </div>  

    
</div>
   );
}

const photobox= css({
    // marginBlockStart: '1em',
    // marginBlockEnd: '1em',
    // marginInlineStart: '0px',
    // marginInlinEnd: '0px',
    // paddingInlineStart: '40px',
  
    display: 'flex',
	flexWrap: 'wrap',
    justifyContent:'left',
    alignItems:'center',
   
})

const item = css({
    
    
    
    boxSizing: 'border-box',
    margin: '0',
    padding: '10px',
    width: '33.33333333%' 
  
    
})

export default Photobox ;