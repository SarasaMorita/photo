
import React from 'react';
import { HashRouter as Router, Route, Routes,} from 'react-router-dom';
import Loading from './Loading/Loading';
import Page2Now from './compornent/pages/Page2Now';
import NotFound from './compornent/notfound';
import Page3Loading from './compornent/portforio/Page3Loading';

function Top()  {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Loading />} />
      <Route path="/about" element={<Page2Now/>} />
      <Route path="/machi" element={<Page3Loading/>} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  </Router>
);
  }
 
  export default  Top

  