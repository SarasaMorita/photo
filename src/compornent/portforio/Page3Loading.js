
import Page3fadein from "./Page3fadein";
import { useState,useEffect } from "react";
import Bar from "../../Loading/Bar";


function Page3Loading(){
  const [isloading , setIsLoading] =useState(false);
  useEffect(()=>{
    
    setTimeout(()=>{
      setIsLoading(true)
    }, 2500);
  })

  return(
  <div align="center">
{isloading==false?
       <Bar />:<Page3fadein/>
}

  </div>

  );
}

      

  

  
  export default  Page3Loading;
