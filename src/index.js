import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import Container from './compornent/container';
import { BrowserRouter } from 'react-router-dom';




  




const element =(
    <>
    <BrowserRouter>
    <Container/>
    </BrowserRouter>
     </>
    

)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);