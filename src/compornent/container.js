/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'
import Header from './header';
import Footer from './footer';
import Message from './message';
import Sidebar from './sidebar';
import Resphoto from './resphoto';


function Container  (){
    return (<>
   
    <div css ={container}>
   
    <Sidebar/>
    <Header/>
         
    <Resphoto/> 
     <Message/>
      
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
    
    export default Container