import React,{useContext} from "react";
import { userContext } from "./Component6A";

function MyComponent6C (){

const user = useContext(userContext)

return(<div className="box">
    <h1>Component 6C</h1>
    <h2>{`Hello again  ${user}`}</h2>

</div>)
}

export default MyComponent6C;