
import React from 'react';
import { HashRouter as Router, Route, Routes,} from 'react-router-dom';
import FadeInCon from './compornent/fadeincon';
import Page2Fade from './compornent/page2Fade';

function Top()  {


  return (<Router>
    <Routes>
      <Route path="/" element={<FadeInCon />} />
      <Route path="/about" element={<Page2Fade/>} />
    </Routes>
  </Router>
);
  }
 
  export default  Top

  