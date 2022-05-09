import { useEffect, useState } from "react";
import "./FormSubscription.css"
const FormSubscription = (props) => {
    const [form, setForm] = useState({ title: "", date: "", amount: "" });
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        const timerId = setTimeout(() => {
            console.log("run effect")
            if (form.title.trim().length > 0) {
                setIsValid(true)
            }
        }, 2000);
        // cleanup function always be called at first then settimeout
        return () => {
            console.log("cleanup function ");
            // using cleartimeout function now effect function only 
            // runs on last typed character check by typing quicky
            // with and without clearTimeout function
            clearTimeout(timerId);
        }
    }, [form.title]);

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
        if (form.title.trim().length === 0 || form.title.length >= 20) {
            setIsValid(false)
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
                    <label className={`new_subscription_label${!isValid ? "_invalid" : ""}`} >Title</label>
                    {<input type="text" onChange={onTitleHandler} value={form.title}></input>}
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" onChange={onDateHandler} value={form.date}></input>
                </div>
                <div className="new_subscription_control">
                    <label >Amount</label>
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