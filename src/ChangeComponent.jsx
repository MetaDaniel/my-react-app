import { useState } from "react";

function ChangeComponent() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("")
    const [shipping, setShipment] = useState("")




    function handleNameChange(e) {
        setName(e.target.value)
    }


    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    function handleCommentChange(e){
        setComment(e.target.value);
    }


    function handlePaymentChange(e) {
        setPayment(e.target.value);
    }


    function handleShipmentChange(e) {
        setShipment(e.target.value) 
    }


    return (<div>

        <input value={name} onChange={handleNameChange} />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity} </p>

        <textarea value={comment} onChange={handleCommentChange} 
        placeholder="Enter delivery instructions" />
        <p>Comment: {comment}</p>


        <select value={payment} onChange={handlePaymentChange}>
            <option>Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment Method: {payment}</p>

        <label >
            <input type="radio" value={"pick up"} 
             checked ={shipping === "pick up"} onChange={handleShipmentChange}/>
                
            Pick up
            </label>

        <label>

        <input type="radio" value={"Delivery"} 
             checked ={shipping === "Delivery"} onChange={handleShipmentChange}/>
            Delivery
            </label>
        
        <p>Shipping: {shipping}</p>




    </div>)
}

export default ChangeComponent;
