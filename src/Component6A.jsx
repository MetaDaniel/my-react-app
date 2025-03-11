import { useState, createContext} from "react";
import MyComponent6B from "./Component6B";

export const userContext = createContext();


function MyComponent6A (){

const [user, setUser] = useState("Metalion")

return(<div className="box">
    <h1>Component 6A</h1>
    <h2>{`Hello ${user}`}</h2>
    <userContext.Provider value={user}>

       <MyComponent6B user =  {user}  />

    </userContext.Provider>

</div>)
}

export default MyComponent6A;