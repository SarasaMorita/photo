import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './compornent/container';
import Page2 from './compornent/pages/page2';

const Top = () => (
    <Router>
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="about" element={<Page2 />} />
      </Routes>
    </Router>
  );
  
  export default Top;