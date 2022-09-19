import React from 'react';
import MediaQuery from "react-responsive";
import Miniphotobox from './Miniphotobox';
import Photobox from './photobox';


function Resphoto ()  {
    
    return (
        
        <><MediaQuery query="(max-width: 767px)">
            <Miniphotobox />
        </MediaQuery><MediaQuery query="(min-width: 767px)">
                <Photobox  />
            </MediaQuery></>
   );
}

export default Resphoto


