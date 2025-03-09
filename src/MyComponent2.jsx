import React,{useState} from "react";
import List from "./List";

function myComponent2() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";

        setFoods(f => [...f, newFood]);

    }

    function handleRemoveFood(index){

        setFoods(foods.filter((_, i) => i !== index));

    }
    

    return(<div>

                <h1>List of food </h1>
                <ul>
                    {foods.map((food, index)=> <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
                </ul>

                <input type="text" id="foodInput" placeholder="Enter food name"/>
                <button onClick={handleAddFood}>Add food </button>

           </div>
    )
}

export default myComponent2;