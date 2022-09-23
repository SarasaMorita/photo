
import FadeInCon from "../compornent/fadeincon";
import { useState,useEffect } from "react";
import Bar from "./Bar";


function Loading(){
  const [isloading , setIsLoading] =useState(true);
  useEffect(()=>{
    
    setTimeout(()=>{
      setIsLoading(false)
    }, 2500);
  })

  return(
  <div align="center">
{isloading==true?
       <Bar />:<FadeInCon/>
}

  </div>

  );
}

      

  

  
  export default Loading;
