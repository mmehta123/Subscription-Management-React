import "./SubscriptionList.css"
import Subscription from "../Subscription";

const SubscriptionList=(props)=>{
    console.log(props.list)
    if(props.list.length==0){return(<h5 className="list_no_data">No Data Found...</h5>);}
    return(
    <ul className="list">
        {props.list.map((item,index)=>
                <Subscription date={item.date} title={item.title} amount={item.amount} key={index} />)
                }
    </ul>
    )
}
export default SubscriptionList;