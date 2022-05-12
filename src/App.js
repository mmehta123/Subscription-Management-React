import './App.css';
import Container from "./templates/Container";
import NewSubscription from './components/NewSubscription/NewSubscription';
import { useCallback, useEffect, useState } from 'react';
import Filter from './components/NewSubscription/Filter';
import SubscriptionList from './components/NewSubscription/SubscriptionList';
import SubscriptionChart from './components/NewSubscription/SubscriptionChart';

let initialSubscriptions = [
  // {
  //   id: "1",
  //   date: (new Date('2021', '03', '23')),
  //   title: "Monthly Subscription",
  //   amount: "125.60"
  // },
  // {
  //   id: "2",
  //   date: (new Date('2020', '06', '28')),
  //   title: "Annual Subscription",
  //   amount: "1125.00"
  // },
  // {
  //   id: "3",
  //   date: (new Date('2021', '09', '05')),
  //   title: "Quarterly Subscription",
  //   amount: "425.50"
  // }
]
function App() {
  const [subscriptions, setSubscription] = useState(initialSubscriptions);
  const [filteredYear, setFilteredYear] = useState("2020");
  const [isLoading, setIsLoading] = useState(false)
  // useEffect(() => {
  //   if (localStorage.getItem('filteredYear')) {
  //     setFilteredYear(localStorage.getItem('filteredYear'))
  //   }
  // }, []);
// pOSTING DATA TO API USING FORM ADD NEW BUTTON
  const newSubToApp = async (data) => {
    // setSubscription([data, ...subscriptions]);
    const postResponse=await fetch("https://react-workspace-45271-default-rtdb.firebaseio.com/subscriptions.json"
    ,{
      
      method:'POST',
      body:JSON.stringify(data),
      headers:{'content-type':'application/json'}
    })
  }
  // getting data from api at button click
  const onFetchHandler=useCallback(()=>{
    setIsLoading(true);
    fetch("https://react-workspace-45271-default-rtdb.firebaseio.com/subscriptions.json").then((response)=>{
      return response.json();
    }).then((data)=>{
      let fetchedSubscription=[];
      for(let x in data){
        fetchedSubscription.push(data[x]);
      }
      setSubscription(fetchedSubscription)
      setIsLoading(false);
    })
  },[])

  const dataFromFilter = (year) => {  
    setFilteredYear(year);
    localStorage.setItem('filteredYear', year)
  }
  const filteredArr = subscriptions.filter((item) => {
    return new Date(item.date).getFullYear().toString() === filteredYear;
  })

  for(let k in filteredArr){
    // console.log(new Date(filteredArr[k].date).getFullYear())
    filteredArr[k].date = new Date(filteredArr[k].date)
   
  }


  return (
    <Container>
      <h1 style={{'color':'red','textAlign':'center'}}>Subscription-Management</h1>
      <button onClick={onFetchHandler}>Fetch Data</button>
      <NewSubscription newSubToApp={newSubToApp} />
      <Filter filteredData={filteredYear} dataFromFilter={dataFromFilter} />
       <SubscriptionChart filterSubscription={filteredArr} />
      {!isLoading && filteredArr.length > 0 && <SubscriptionList list={filteredArr} />}
      {!isLoading && filteredArr.length == 0 && <p className='list-no-data'>No data Found from server</p>} 
      {isLoading && <h2>Data is Loading</h2>}

    </Container>
  );
}

export default App;
