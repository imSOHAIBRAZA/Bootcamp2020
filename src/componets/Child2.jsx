import React, { useReducer } from 'react';
import CounterReducer from '../CounterReducer';

const Child2 = () => {

    let [state, dispatch] =  useReducer(CounterReducer, 1);

    return(
        <div>
            <h2>This is second child using Counter Reducer</h2>

            <h2>Value of reducer state is: {state}</h2>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default Child2
