/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react';
import {MenuData} from './menudata';



function Menubar(){

    return (
        <div css ={menubar}>
         <ul 
         css={menulist}
         >
          {MenuData.map((value, key)=>{
            return(
            <li 
             key={key} css={row} onClick={()=>{
                window.location.pathname =value.link;
            }}
            >  
            <div id="icon">
                    {value.icon}</div>
                <div id="icon">
                    {value.title}</div>
            </li>    
            );
          } )}

         </ul>

        </div>

    )
}

const menubar =css({
    width:'100%',
    minHeight:'20vh',
 
    backgroundColor:'#808080',
    display:'inline',
    
    

})

const menulist =css({
    height:'auto',
    // paddingTop:'20px',
    width:'100%',
    display:'flex',
})

const row = css({
   
    width:'100%',
    minHeight:'5vh',
    display:'flex',
    color:'white', 
    justifyContent:'right',
    alignItems:'center',
    backgroundColor:'#696969',
    margin:'0px',


    hover : {
     cursor:'pointer',
     backgroundColor:'#000000',
    //  margin:'20px'


      }
})

export default  Menubar;