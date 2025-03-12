
import React,{useEffect, useRef, useState} from "react";

function MyComponent7(params) {

const ref = useRef("pizza");

useEffect(()=> {
    console.log("Component Rendered");

    console.log(ref);
    
    
})

function handleClick(){
   ref.current++;
   console.log(ref.current);
   
}


   return (
   <button onClick={handleClick}>
    Click me!
   </button>
) 

}

export default MyComponent7;