import React, {useState, useEffect} from 'react';
import './App.css';
import { mockAPICall } from './data';

function App() {
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    mockAPICall().then(res => setPurchases(res));
  }, [])
  
  function computeRewards(amount) {
    let rewards = 0;
    if (amount > 100) {
      rewards += (amount - 100) * 2;
      amount = 100;
    }
    if (amount > 50) {
      rewards += (amount - 50) * 1;
    }
    return rewards;
  }

  let rewards = null;
  if(purchases.length > 0) {
    rewards = {};
    purchases.forEach(user => {
      const {purchases, name} = user;
      purchases.forEach(item => {
        let reward = computeRewards(item.amount);
        rewards[name] = rewards[name] + reward || reward;
      });
    })
  }

  return (
    <div className="App">
      {rewards && Object.keys(rewards).map(person => (
        <span className='reward-item'>{person}: {rewards[person]} points</span>
      ))}
    </div>
  );
}

export default App;
