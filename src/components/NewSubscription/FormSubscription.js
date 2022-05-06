import { useState } from "react";
import "./FormSubscription.css"
const FormSubscription=()=>{
    const [title,setTitle]=useState("");
    const [date,setDate]=useState("");
    const [amount,SetAmount] = useState("");

    const onTitleHandler=(event)=>{
        setTitle(event.target.value)
    }
    const onDateHandler = (event) => {
        setDate(event.target.value);
    }
    const onAmountHandler = (event) => {
        SetAmount(event.target.value); 
    }
    
    return (
        <form>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type="text" onChange={onTitleHandler} value={title}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" onChange={onDateHandler} ></input>
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type="text" onChange={onAmountHandler} ></input>
                </div>
                <div className="new_subscription_actions">
                    <button type="submit">Add New</button>
                </div>
                
            </div>
        </form>
    );
}
export default FormSubscription;