/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'

function Title (){
    return (
        <div css={title}>
        About Sarasa Morita
        </div>       
   
   );
}

const title= css({
   
    display: 'flex',
	flexWrap: 'wrap',
    justifyContent:'left',
    alignItems:'center',
    marginLeft:'10px',
    flexFlow: 'column',
    fontSize: "calc(8px + 2vmin)",
    padding:'2vh'
})

export default Title


