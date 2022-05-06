import './App.css';
import  Container  from "./templates/Container";
import Subscription from './components/Subscription';
import NewSubscription from './components/NewSubscription/NewSubscription';
import { useState } from 'react';

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
 // LOOK HERE
  const newSubToApp=(data)=>{
    setSubscription([data, ...subscriptions] ) 
  }
  return (
    <Container>
      <NewSubscription newSubToApp={newSubToApp}/>
      {subscriptions.map((item,index)=>
        <Subscription date={item.date} title={item.title} amount={item.amount} key={index}/>
      )}
    </Container>
  );
}

export default App;
