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
  const[filteredYear,setFilteredYear]=useState("2022");

  const newSubToApp=(data)=>{
    setSubscription([data, ...subscriptions] ) 
  }
// Look Here
  const dataFromFilter=(year)=>{
        setFilteredYear(year);
  }
  // Look Here
  const filteredArr=subscriptions.filter((item)=>{
    return item.date.getFullYear().toString()===filteredYear
  })

  {/* Look Here Condition Rendring  for 1st,2nd Method*/ }
  const ConditionRen=()=>{
    return(
    filteredArr.map((item, index) =>
      <Subscription date={item.date} title={item.title} amount={item.amount} key={index} />
    )
    )
  }
  {/* Look Here Condition Rendring  for 3rd Method*/ }
  let content=<h5>no data found</h5>;
  if(filteredArr.length!==0){
    content = filteredArr.map((item, index) =>
      <Subscription date={item.date} title={item.title} amount={item.amount} key={index} />
    )
  }
  

  return (
    <Container>
      <NewSubscription newSubToApp={newSubToApp}/>
      <Filter filteredData={filteredYear} dataFromFilter={dataFromFilter}/>

      {/* 1st method Look Here Condition Rendring */}
      {/* {filteredArr.length===0?<h5>No data found</h5>:<ConditionRen/>} */}

      {/*2nd method or to get rid of complex ternary operator we can use below statement */}
      {/* {filteredArr.length === 0 && <h5>No data found</h5>}
      {filteredArr.length !== 0 && <ConditionRen /> } */}

      {/* 3rd method without any condition */}
      {content}
    </Container>
  );
}

export default App;
