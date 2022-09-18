/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react'
import Header from './haeder';
import Footer from './footer';
import  Photobox from './photobox';
import Message from './message';
import Sidebar from './sidebar';
import { Routes, Route } from 'react-router-dom';
import Page2 from './pages/page2';


function Container  (){
    return (<>
   
    <div css ={container}>
     
    <Sidebar  />
         <Header></Header>
         
         <Photobox></Photobox>  
       <Message></Message>
      
       <Footer></Footer>  
    
       <Routes>
        
          <Route  path="*" element={<Container />}  />
          <Route path="/page2/*" element={<Page2/>} />
          
        </Routes> 
       
       
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