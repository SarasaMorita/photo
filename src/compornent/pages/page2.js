/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react';
import Header from '../haeder';
import Footer from '../footer';
import Title from './title';
import Prfphoto from './prfphoto';
import About from './about';
import Sidebar from '../sidebar';
import { Routes, Route,  } from 'react-router-dom';
import Container from '../container';

function Page2  (){
    return (<>
   
    <div css ={container}>

    <Sidebar  />
     <Header/>  
      <Title/>
      <Prfphoto/>
      <About/>
       <Footer/>  
       <Routes>
        
          <Route exact path="/" element={<Container />}  />
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
    
    export default Page2