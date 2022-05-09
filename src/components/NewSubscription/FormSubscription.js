import { useEffect, useReducer, useState } from "react";
import "./FormSubscription.css"


const formReducerFn=(latestState,action)=>{
    if(action.type==="TITLE"){
        return ({ ...latestState, title:action.val })
    }
    if (action.type === "DATE") {
        return ({ ...latestState, date:action.val })
    }
    if (action.type === "AMOUNT") {
        return ({ ...latestState, amount:action.val })
    }
    return { title: "", date: "", amount: "" }
}
const FormSubscription = (props) => {
    const [isValid, setIsValid] = useState(true);
    const [formReducer, setFormReducer] = useReducer(formReducerFn, { title: "", date: "", amount: "" })
    // optional if we want not to use formReducer.title again and again we can destructure it and use as reducerTiltle
    const {title:reducerTitle}=formReducer

    useEffect(() => {
        const timerId = setTimeout(() => {
            if (reducerTitle.trim().length > 0) {
                setIsValid(true)
            }
        }, 2000);
        return () => {
            clearTimeout(timerId);
        }
    }, [reducerTitle]);

    const onTitleHandler = (event) => {
        setFormReducer({type:"TITLE",val:event.target.value})
    }
    const onDateHandler = (event) => {
        setFormReducer({ type: "DATE", val: event.target.value })

    }
    const onAmountHandler = (event) => {
        setFormReducer({ type: "AMOUNT", val: event.target.value })

    }
    const OnSubmitHandler = (event) => {
        event.preventDefault();
        if (reducerTitle.trim().length === 0 || reducerTitle.length >= 20) {
            setIsValid(false)
            return;
        }
        const subscriptions = { title: reducerTitle , date: new Date(formReducer.date), amount:  formReducer.amount}
        props.formToNew(subscriptions);
        props.setShowForm(false)
    }
    return (
        <form onSubmit={OnSubmitHandler}>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label className={`new_subscription_label${!isValid ? "_invalid" : ""}`} >Title</label>
                    {<input type="text" onChange={onTitleHandler} value={reducerTitle}></input>}
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" onChange={onDateHandler} value={formReducer.date}></input>
                </div>
                <div className="new_subscription_control">
                    <label >Amount</label>
                    <input type="text" onChange={onAmountHandler} value={formReducer.amount}></input>
                </div>
                <div className="new_subscription_actions">
                    <button id="cnlbtn" onClick={props.onCancelHandler}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    );
}
export default FormSubscription;