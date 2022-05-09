import './App.css';
import Container from "./templates/Container";
import NewSubscription from './components/NewSubscription/NewSubscription';
import { useEffect, useState } from 'react';
import Filter from './components/NewSubscription/Filter';
import SubscriptionList from './components/NewSubscription/SubscriptionList';
import SubscriptionChart from './components/NewSubscription/SubscriptionChart';

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
  const [subscriptions, setSubscription] = useState(initialSubscriptions);
  const [filteredYear, setFilteredYear] = useState("2020");
  // so if there is any previous filtered year saved then it will first load usestate with data with localstorage year
  // if nothing is saved it will not run show by default 2020 filteredYear data
  useEffect(() => {
    if (localStorage.getItem('filteredYear')) {
      setFilteredYear(localStorage.getItem('filteredYear'))
      console.log("run useEffect" + localStorage.getItem('filteredYear'))
    }
  }, [])

  const newSubToApp = (data) => {
    setSubscription([data, ...subscriptions])
  }

  const dataFromFilter = (year) => {
    setFilteredYear(year);
    // it saves filtered year in local storage of browser see in inspect application option
    localStorage.setItem('filteredYear', year)
    console.log("run datafromfilter", localStorage.getItem('filteredYear', year))
  }

  const filteredArr = subscriptions.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Container>
      <NewSubscription newSubToApp={newSubToApp} />
      <Filter filteredData={filteredYear} dataFromFilter={dataFromFilter} />
      {/* LOOK Here */}
      <SubscriptionChart filterSubscription={filteredArr} />
      <SubscriptionList list={filteredArr} />
    </Container>
  );
}

export default App;
