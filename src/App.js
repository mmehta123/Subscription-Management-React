import './App.css';
import  Container  from "./templates/Container";
import Subscription from './components/Subscription';
import NewSubscription from './components/NewSubscription/NewSubscription';
import { useState } from 'react';
import Filter from './components/NewSubscription/Filter';

let initialSubscriptions = [
  {
    id: "1",
    date: (new Date('2021', '03', '23')),
    title: "Monthly Subscription",
    amount: "125.60"
  },
  {
    id: "2",
    date: (new Date('2020', '06', '28')),
    title: "Annual Subscription",
    amount: "1125.00"
  },
  {
    id: "3",
    date: (new Date('2021', '09', '05')),
    title: "Quarterly Subscription",
    amount: "425.50"
  }
]
function App() {
  const [subscriptions,setSubscription]=useState(initialSubscriptions);
  const[filteredData,setFilteredData]=useState("2021");

  const newSubToApp=(data)=>{
    setSubscription([data, ...subscriptions] ) 
  }

  const dataFromFilter=(data)=>{
        setFilteredData(data);
  }

  return (
    <Container>
      <NewSubscription newSubToApp={newSubToApp}/>
      <Filter filteredData={filteredData} dataFromFilter={dataFromFilter}/>
      {subscriptions.map((item,index)=>
        <Subscription date={item.date} title={item.title} amount={item.amount} key={index}/>
      )}
    </Container>
  );
}

export default App;
