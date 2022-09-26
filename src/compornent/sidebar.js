import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom'

import './sidebar.css';


export default props => {
    return (
      <Menu {...props}>
       <Link to ="/" className="menu-item" >
        Home
      </Link>
      <Link to="/about" className="menu-item" >
        About
      </Link>
      <Link to="/machi" className="menu-item" >
        machi
      </Link>
      
    </Menu>
    );
  };