import Chart from "../../templates/chart/Chart";

const SubscriptionChart =(props)=>{
    const chartData=[
        { 'label': 'Jan', value: 0 },
        { 'label': 'Feb', value: 0 },
        { 'label': 'Mar', value: 0 },
        { 'label': 'Apr', value: 0 },
        { 'label': 'May', value: 0 },
        { 'label': 'Jun', value: 0 },
        { 'label': 'Jul', value: 0 },
        { 'label': 'Aug', value: 0 },
        { 'label': 'Sep', value: 0 },
        { 'label': 'Oct', value: 0 },
        { 'label': 'Nov', value: 0 },
        { 'label': 'Dec', value: 0 }
    ];
    for(const Subscription of props.filterSubscription){
        const month = Subscription.date.getMonth();
        chartData[month].value +=Subscription.amount;
    }
    return(
        <div>
            <Chart datasets={chartData}/>
        </div>
    );
}
export default SubscriptionChart;