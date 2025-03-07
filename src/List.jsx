import { useLayoutEffect } from "react";

function List() {
    const fruits =[ {id:1, name: "apple", calories: 95},
                    {id:2, name: "Orange", calories:45},
                    {id:3,name: "banana", calories: 105},
                    {id:4, name: "coconut", calories:159}, 
                    {id:5, name:"pineapple", calories:37}];
//fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
   // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSALALPHABETICAL
   // fruits.sort((a, b) => a.calories - b.calories) // NUMERIC
    //fruits.sort((a, b) => b.calories - a.calories) // NUMERIC

    const lowCalFruit = fruits.filter(fruits => fruits.calories <1100);
    

    

    const ListItems = fruits.map(fruits => <li key ={fruits.name}>
                                                    {fruits.name}: &nbsp;
                                                    <b>{fruits.calories}</b></li>);
    return(<ol>{ListItems}</ol>)
}

export default List;