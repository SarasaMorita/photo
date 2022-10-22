/** @jsxImportSource @emotion/react */
import {css }  from '@emotion/react';
import Header from '../header';
import Footer from '../footer';
import Title from './title';
import Prfphoto from './prfphoto';
import About from './about';
import Sidebar from '../sidebar';


function Page2  (){
    return (<>
   
    <div css ={container}>

    <Sidebar  />
     <Header/>  
      <Title/>
      <Prfphoto/>
      <About/>
       <Footer/>    

    </div>
</>
        );
    }

    const container =css({
        display: 'flex', 
        flexFlow: 'column',
        minHeight: '100vh',
        
    })
    
    export default Page2