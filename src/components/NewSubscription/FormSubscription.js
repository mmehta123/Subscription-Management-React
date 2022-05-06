import { useState } from "react";
import "./FormSubscription.css"
const FormSubscription = (props) => {
    const [form, setForm] = useState({ title: "", date: "", amount: ""});
    
    const onTitleHandler = (event) => {
        // setForm ({ ...form, title:event.target.value })

        // same thing is done by below arrow function prev state is a by default parameter which is the previus state of the state,
        //  and it is more reliable than ...form
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
        const subscriptions = { title: form.title, date: new Date(form.date), amount: form.amount }
        props.formToNew(subscriptions);
        event.preventDefault();
    }
    return (
        <form onSubmit={OnSubmitHandler}>
            <div className="new_subscription_controls">
                <div className="new_subscription_control">
                    <label>Title</label>
                    <input type="text" onChange={onTitleHandler} value={form.title}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Date</label>
                    <input type="date" onChange={onDateHandler} value={form.date}></input>
                </div>
                <div className="new_subscription_control">
                    <label>Amount</label>
                    <input type="text" onChange={onAmountHandler} value={form.amount}></input>
                </div>
                <div className="new_subscription_actions">
                    <button type="submit">Add New</button>
                </div>
            </div>
        </form>
    );
}
export default FormSubscription;