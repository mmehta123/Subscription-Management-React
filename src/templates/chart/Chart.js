import "./Chart.css"
import ChartBar from "./ChartBar";
const Chart=(props)=>{
    const tempArr=props.datasets.map(item=>item.value);
    let max=Math.max(...tempArr)
    return(
        <div className = "chart">
        {
            props.datasets.map((data)=>
            <ChartBar value={data.value} label={data.label} 
            key={data.label} maxValue={max} />
        )
        }
        </div>
    );
}
export default Chart;