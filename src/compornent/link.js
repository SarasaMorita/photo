import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './sidebar';
import Container from './container';
import Page2 from './pages/page2';


function Link() {
    return (
      
        <Router>
          <Sidebar />
          <Route path="/" component={Container} />
          <Route path="/page2" component={Page2} />
          
        </Router>
      
    )
  }
  
  export default Link