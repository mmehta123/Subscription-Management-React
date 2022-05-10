import "./SubscriptionList.css"
import Subscription from "../Subscription";
import SubscriptionsContext from "../../store/subscribers-context";
import { useContext } from "react";

const SubscriptionList=(props)=>{
    const ctx = useContext(SubscriptionsContext);
    ctx.dummy();
    if(props.list.length==0){return(<h5 className="list_no_data">No Data Found...</h5>);}
    return(
                <ul className="list">
                {ctx.list.map((item,index)=>
                    <Subscription date={item.date} title={item.title} amount={item.amount} key={index} />)
                }
            </ul>
    )
}
export default SubscriptionList;