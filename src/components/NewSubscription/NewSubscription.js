import FormSubscription from "./FormSubscription";
import "./NewSubscription.css"

const NewSubscription=(props)=>{
    return(
        <div className="new_subscription">
            <FormSubscription formToNew={props.newSubToApp} />
        </div>
    );
}
export default NewSubscription