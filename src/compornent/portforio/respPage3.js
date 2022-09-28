import React from 'react';
import MediaQuery from "react-responsive";
import Photoanime from '../../photoanime';
import Miniphotoanime from '../../Miniphotoanime '

function RespPage3 ()  {
    
    return (
        
        <><MediaQuery query="(max-width: 767px)">
            <Miniphotoanime />
        </MediaQuery><MediaQuery query="(min-width: 767px)">
                <Photoanime />
            </MediaQuery></>
   );
}

export default RespPage3


