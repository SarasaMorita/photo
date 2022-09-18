/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'


function About (){
    return (
    <div css={textbox}>
     
    <div css={p}>
      1994年東京生まれ。
    </div>
    <div css={p}>
    現在の仕事をきっかけに写真を始め、いつも肩身離さずカメラを持ち歩くように。

    </div>
    <div css={p}>
     街をぶらぶらしながら好きなものを撮ってます。
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
   
    boxSizing: 'border-box',

})


export default About ;

