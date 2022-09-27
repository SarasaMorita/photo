/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react';
import Header from '../header';
import Footer from '../footer';
import Photoanime from '../../photoanime';
import Sidebar from '../sidebar';


function Page3  (){
    return (<>
   
    <div css ={container}>

    <Sidebar  />
     <Header/>  
     <Photoanime/>
       <Footer/>  
       
       

    </div>
</>
        );
    }

    const container =css({
        display: 'flex', /* フレックスボックスに有効に */
        flexFlow: 'column',/* 要素を縦に並べる */
        minHeight: '100vh',
     
        
        
       
      

       
    })
    
    export default Page3