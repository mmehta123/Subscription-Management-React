import  "./Subscription.css"
import Container from "../templates/Container";
import SubscriptionDate from "./SubscriptionDate"
import { useState } from "react";
function Subscription (props)
{
    const [title,setTitle]=useState(props.title);
    const onClickHandler=()=>{
        setTitle("Title Changed")
        }
    
    let date=props.date
    return (
        <Container className="subscription" >
            <SubscriptionDate date={date}/>
            <h2 className="subscription_title">{title}</h2>
            <div className="subscription_price">{props.amount}</div>
            <button onClick={onClickHandler}>Change Title</button>
        </Container>
    );
}
export default Subscription;