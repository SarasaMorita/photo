
import FadeInCon from "../compornent/fadeincon";
import { useState,useEffect } from "react";
import Bar from "./Bar";


function Loading(){
  const [isloading , setIsLoading] =useState(false);
  useEffect(()=>{
    
    setTimeout(()=>{
      setIsLoading(true)
    }, 2500);
  })

  return(
  <div align="center">
{isloading==false?
       <Bar />:<FadeInCon/>
}

  </div>

  );
} 
  export default Loading;
