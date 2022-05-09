import { useEffect, useState } from "react";
import "./FormSubscription.css"
const FormSubscription = (props) => {
    const [form, setForm] = useState({ title: "", date: "", amount: ""});
    const [isValid,setIsValid]=useState(true);
    const [isAmountValid, setIsAmountValid] = useState(true);
    useEffect(()=>{
        if (form.title.trim().length > 0) {
            setIsValid(true)
        }
        if(form.amount.trim().length>0){
            setIsAmountValid(true)
        }
    },[form.title,form.amount]);
    
    const onTitleHandler = (event) => {
        setForm((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }
    const onDateHandler = (event) => {
        setForm({ ...form, date: event.target.value })
    }
    const onAmountHandler = (event) => {
        setForm({ ...form, amount: event.target.value })
    }
    const OnSubmitHandler = (event) => {
        event.preventDefault();
        if (form.title.trim().length === 0|| form.title.length >= 20 ){
            setIsValid(false)
            return;
        }
        if(form.amount.trim().length===0 || Number(form.amount)<100){
            setIsAmountValid(false);
            return;
        }
        const subscriptions = { title: form.title, date: new Date(form.date), amount: form.amount }
        props.formToNew(subscriptions);
        props.setShowForm(false)
    }
    return (
        <form onSubmit={OnSubmitHandler}>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label className={`new_subscription_label${!isValid?"_invalid":""}`} >Title</label>
                    {<input type="text" onChange={onTitleHandler} value={form.title}></input>}
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" onChange={onDateHandler} value={form.date}></input>
                </div>
                <div className="new_subscription_control">
                    <label className={`new_subscription_label${!isAmountValid ? "_invalid" : ""}`}>Amount</label>
                    <input type="text" onChange={onAmountHandler} value={form.amount}></input>
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