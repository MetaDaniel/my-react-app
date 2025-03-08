import React, {useState} from "react";

function colorPicker() {

    const [color, setColor] = useState("#ffffff");


    function handleColourChange(e) {
        setColor(e.target.value);
    }


    

    return(
        <div className="color-picker-container">
            <h1>Color picker</h1>

            <div className="color-display" style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
            </div>
            <label >Select a color</label>
            <input type="color" value={color} onChange={handleColourChange} />

        </div>
    )
}

export default colorPicker;