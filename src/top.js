
import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import FadeInCon from './compornent/fadeincon';
import Page2 from './compornent/pages/page2';

function Top()  {


  return (<Router>
    <Routes>
      <Route path="/" element={<FadeInCon />} />
      <Route path="/about" element={<Page2 />} />
    </Routes>
  </Router>
);
  }
 
  export default  Top

  