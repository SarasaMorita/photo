/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'


function Message (){
    return (
    <div css={textbox}>
      <div css={p}>
      生きていれば生きているほど、私にとっての当たり前は覆されていく。  
      </div>
      
      <div css={p}>
      でもほんの少しだけでいいから、私は私の世界を信じていたいな。
      </div>

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
})

const p = css({
  
    textAlign: 'left',
     color: '#696969',
    position:'relative',
    left:'0px',
    lineHeight:'20px',
    width:'100%',
    margin:'0.5em auto',
    display: 'flex',
    boxSizing: 'border-box'
})
export default Message ;

