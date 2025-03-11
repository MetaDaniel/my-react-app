import React,{useContext} from "react";
import { usercontext } from "./Component6A";

function MyComponent6D (){

    const user = useContext(useContext)
return(<div className="box">
    <h1>Component 6D</h1>
    <h2>{`Bye ${user} `}</h2>

</div>)
}

export default MyComponent6D;