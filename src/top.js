import {React, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Container from './compornent/container';
import Page2 from './compornent/pages/page2';

function Top()  {
//   const { pathname } = useLocation();


//   useEffect (
//     () => {
//         window.scrollTo(0, 0);
//     },
//     [pathname]
// );

  return (<Router>
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/about" element={<Page2 />} />
    </Routes>
  </Router>
);
  }
 
  export default  Top

  // function Top() {
  //   return (
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Container />} />
  //         <Route path="about" element={<Page2 />} />
  //       </Routes>
  //     </Router>
  //   );
  // }
  
  // export default Top;