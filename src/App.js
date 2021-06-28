import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { increment, decrement } from './actions';

function App() {

  const counter = useSelector(state => state.counterReducer);
  const isLoggedIn = useSelector(state => state.loggedReducer); 
  const dispatch = useDispatch(); 

  return (
    <div className="App">
      <h1>Counter {counter} </h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      {isLoggedIn ? <h3>This will not show up</h3>: <h3>This will show up</h3>}
    </div>
  );
}

export default App;
