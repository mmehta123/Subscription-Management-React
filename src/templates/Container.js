import "./Container.css"
export default function Container(props){
    const classes = "container " + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}