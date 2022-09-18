import React from 'react';
import ReactDOM from 'react-dom/client';
import "normalize.css";
import Container from './compornent/container';
import { BrowserRouter as Router } from 'react-router-dom';




  




const element =(
    <>
    <Router>
    <Container/>
    </Router>
     </>
    

)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(element);