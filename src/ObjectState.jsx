import React,{useState} from "react";

function objectState() {

    const [car, setcar] = useState({year: 2024, make: "Ford", model: "Mustang"})

    function handleYearChange (e){
        setcar(c => ({...c, year:e.target.value}));
    }

    function handleMakeChange (e){
        setcar(c => ({...c, make: e.target.value}));

    }

    function handleModelChange (e){
        setcar(c => ({...c, model: e.target.value}));

    }

    return (
        <div>
            <p>Your favourite car is: {car.year}  {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/> <br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/> <br/>
            <input type="text" value={car.model} onChange={handleModelChange}/> <br/>

        </div>
    )
}

export default objectState;