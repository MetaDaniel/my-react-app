import React, {useState} from "react";

function MyComponent3() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar() {
        const newCar = {year: carYear,
                        make: carMake, 
                        model: carModel }
            setCars (c => [...c, newCar])

            setCarYear(new Date().getFullYear())

            setCarMake("");
            setCarModel("");
    }
    
    function handleRemoveCar(index) {
        setCars(c => c.filter((_, i) => i !== index) )
    }

    function handleYearChange(e) {

        setCarYear(e.target.value)
        
    }

    function handleMakeChange(e) {
        setCarMake(e.target.value)
    }

    function handleModelChange(e) {
        setCarModel(e.target.value)
    }


    

    return(<div>
        <h2>List of car objects</h2>
        <ul>
            {cars.map((car, i) => 
            <li key={i} onClick={() =>handleRemoveCar(i)}>
                    {car.year} {car.make} {car.model}
            </li>
            )}

        </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /> <br/>
            
            <input type="text" value={carMake} onChange={handleMakeChange}
            placeholder="Enter car make" /><br/>

            <input type="text" value={carModel} onChange={handleModelChange}
            placeholder="Enter car Model" /><br/>

            <button onClick={handleAddCar}>Add car</button>
        

    </div>)
}

export default MyComponent3;
