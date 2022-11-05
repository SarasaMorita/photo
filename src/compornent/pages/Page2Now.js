import Page2Fade from "./page2Fade";
import Bar from "../../Loading/Bar";
import { useState,useEffect } from "react";

function Page2Now(){
    const [isloading , setIsLoading] =useState(true);
    useEffect(()=>{
      
      setTimeout(()=>{
        setIsLoading(false)
      }, 2500);
    })
  
    return(
    <div align="center">
  {isloading==true?
         <Bar />:<Page2Fade/>
  }
  
    </div>
  
    );
  }
    
    export default Page2Now;