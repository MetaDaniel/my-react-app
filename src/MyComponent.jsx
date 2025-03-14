
import React, {useState} from "react";


function MyComponent() {
    
const [name, setName] = useState();

const [age, setAge] = useState(0);

const [isEmployed, setIsEmployed] = useState (false);

const updateName = () => { setName("Guest");} 

const increamentAge = () => {setAge(age + 2);}

const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
}

return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={increamentAge}>increament age</button>

        <p>Employement status: {isEmployed ? "yes" : "No" }</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
);

}
export default MyComponent;
