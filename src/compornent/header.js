/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'


function Header()  {
    
    return (
    
    <div css={header}>
        <div css ={containerStyle}>
            わくぐみのへや
        </div>
      
      
    </div>
    );
}

    const containerStyle = css({
        textAlign:'center',
        paddingTop:'10px'


    })

    const header =css({
         width:'100%',
        padding:'17px 0',
        margin:'0 auto',
        backgroundColor:'#282c34',
        fontSize: "calc(20px + 2vmin)",
        color: "white",
        height:'50px'
     

    })
    

    export default Header ;