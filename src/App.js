import React,{useState} from 'react';
import Context from './ContextApi';
import Parent from './componets/Parent';
import './App.css';

function App() {
  // let [count, setCount] =useState(1); Below line same like this 
  let countState = useState(1) //[value, function]
  return (
    <div className="App">
      <Context.Provider  value={countState}>
        <Parent />
      </Context.Provider>
      
    </div>
  );
}

export default App;
