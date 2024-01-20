import './App.css';
import { useEffect, useState } from 'react';
import Navigation from './components/Navigation/navigation';
import Board from './components/Boards/board';
import { status, priorities } from './resources/details';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const defaultGroup = localStorage.getItem('selectedGroup');
  const defaultOrder = localStorage.getItem('selectedOrder');

  const [group, setGroup] = useState(defaultGroup ? defaultGroup : 'status');
  const [order, setOrder] = useState(defaultOrder ? defaultOrder : 'priority');


  const handleGroup = (groupSelected) => {
    setGroup(groupSelected);
    localStorage.setItem("selectedGroup", groupSelected);
  }
  const handleOrder = (orderSelected) => {
    setOrder(orderSelected);
    localStorage.setItem("selectedOrder", orderSelected);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await res.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.log("Unable to fetch ", error);
    }
  }

  return (
    <div className="App">
      <Navigation group={group} order={order} onGroupchange={handleGroup} onOrderChange={handleOrder} />
      <div className='container'>
        <div className='boards'>
          {
            group === 'status' && status.map((val, id) => (
              <Board order={order} data={val} key={id} tickets={tickets} users={users} group={group} />
            ))
          }
          {
            group === 'user' && users.map((val) => (
              <Board order={order} data={val} key={val.id} tickets={tickets} users={users} group={group} userId={val?.id} />
            ))
          }
          {
            group === 'priority' && priorities.map((val, id) => (
              <Board order={order} data={val} level={id} key={id} tickets={tickets} users={users} group={group} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
