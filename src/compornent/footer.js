/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'



function Footer (){
    
    return (
    <div css={footer}>
        <div css ={containerStyle}>
      Copyright © 2022 sarasa All Rights Reserved.
        </div>
     </div>
    
      
    );
  }

  const containerStyle= css({
    
    
    TextAlign : 'revert',
    padding:'0 10px'
    
   
  })

  const footer = css({
    backgroundColor: "#282c34",
    // width:'100%',
    padding:'15px 0',
    // margin:' 0 auto',
    fontSize: "calc(1px + 2vmin)",
    color: "white",
    marginTop:'auto',
    
  })

export default Footer