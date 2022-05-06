import Container from "../templates/Container";
import "./SubscriptionDate.css"
const SubscriptionDate=(props)=>{
    console.log(props.date)
    let day=props.date.toLocaleString('default',{day:'2-digit'})
    let month=props.date.toLocaleString('default',{month:'long'})
    let year=props.date.getFullYear();
    return(
        <Container>
            <div className="date">
                <div className="day">{day}</div>
                <div className="month">{month}</div>
                <div className="year">{year}</div>
            </div>
        </Container>
    );
}
export default SubscriptionDate;