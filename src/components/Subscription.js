import  "./Subscription.css"
import Container from "../templates/Container";
import SubscriptionDate from "./SubscriptionDate"
import { useState } from "react";
function Subscription (props){
// const [title,setTitle]=useState(props.title);

    // const titleChangeHandler=()=>{
    //     setTitle('hell yeah!!')
    // }
    return (
        <Container className="subscription" >
            <SubscriptionDate date={props.date}/>
            <h2 className="subscription_title">{props.title}</h2>
            <div className="subscription_price">{props.amount}</div>
            {/* <button onClick={titleChangeHandler}>change title</button> */}
        </Container>
    );
}
export default Subscription;