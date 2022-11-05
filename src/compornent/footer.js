/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'

function Footer (){
    
    return (
    <div css={footer}>
        <div css ={containerStyle}>
      Copyright © 2022 Sarasa All Rights Reserved.
        </div>
     </div>
    
      
    );
  }

  const containerStyle= css({
    
    
    TextAlign : 'center',
    padding:'0 10px'
    
   
  })

  const footer = css({
    backgroundColor: "#282c34",
    padding:'15px 0',
    fontSize: "calc(1px + 2vmin)",
    color: "white",
    marginTop:'auto',
    
  })

export default Footer