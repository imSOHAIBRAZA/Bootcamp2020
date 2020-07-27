import React,{useContext} from 'react';
import Context from '../ContextApi';

function Child() {
    let counterValue = useContext(Context);
    return (
        <div>
            <h1> UseConxtex Counter</h1>
            <p>Count: {counterValue[0]}</p>

            <button onClick={()=>counterValue[1](++counterValue[0])}>Conetxt Increment</button>
        </div>

    );
}

export default Child;
