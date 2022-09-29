
import Page3fadein from "./Page3fadein";
import { useState,useEffect } from "react";
import Bar from "../../Loading/Bar";
import RespPage3 from "../portforio/respPage3";
import Hello from "./hello";
 
function Page3Loading(){
  const [isloading , setIsLoading] =useState(true);
  useEffect(()=>{
    
    setTimeout(()=>{
      setIsLoading(false)
    }, 2500);
  })

  return(
  <div align="center">
{isloading==true?
       <Bar />:<Hello/>
}

  </div>

  );
}

      

  

  
  export default  Page3Loading;
