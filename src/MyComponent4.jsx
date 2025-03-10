import React,{useState, useEffect} from "react";


function MyComponent4 (){

    const [count, setCount] = useState(0)
    const [color, setColor] = useState("greem", "red")

    useEffect(() => {
        document.title = `my counter program; ${count} ${color}`;
    }, [count, color])



    function addCount() {
        setCount(c=> c +1); 
    }

    function subractCount() {
        setCount(c=> c -1); 
    }

    function changeColor (){
        setColor(c=> c === "green"? "red" : "green")
    }

    return (
        <>
        <p style={{color: color}}>Count: {count} </p>
        <button className="add-count" onClick={addCount} >Add</button>
        <button className="add-count" onClick={subractCount} >subtract</button>
        <button className="add-count" onClick={changeColor} >Change color</button>
        </>
    )
}

export default MyComponent4; 