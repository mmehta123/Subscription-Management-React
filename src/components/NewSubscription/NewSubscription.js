import { useState } from "react";
import FormSubscription from "./FormSubscription";
import "./NewSubscription.css"

const NewSubscription=(props)=>{
    const [showForm,setShowForm]=useState(true);
    const showFormBtnHandler=()=>{
        setShowForm(!showForm)
    }
    return(
        <div className="new_subscription">
            {showForm && <FormSubscription formToNew={props.newSubToApp} />}
            <button onClick={showFormBtnHandler}>Toggle Form</button>
        </div>
    );
}
export default NewSubscription