import { useState } from "react";
import FormSubscription from "./FormSubscription";
import "./NewSubscription.css"

const NewSubscription=(props)=>{
    const [showForm,setShowForm]=useState(true);

    const hideFormHandler=()=>{
        setShowForm(false)
    }
    return(
        <div className="new_subscription">
            {
                showForm && <FormSubscription onCancelHandler={hideFormHandler} 
                formToNew={props.newSubToApp} setShowForm={setShowForm} />
            }
            <button onClick={()=>setShowForm(!showForm)}>Toggle Form</button>
        </div>
    );
}
export default NewSubscription