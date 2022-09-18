/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'



function Title (){
    return (
        <div css={title}>
        About Sarasa Morita
        </div>       
   
   );
}

const textbox= css({
   
    display: 'flex',
	flexWrap: 'wrap',
    justifyContent:'left',
    alignItems:'center',
    marginLeft:'20px',
    flexFlow: 'column',
    fontSize: "calc(8px + 2vmin)",
})

export default Title


