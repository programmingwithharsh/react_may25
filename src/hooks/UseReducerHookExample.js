import { useReducer } from 'react';

const reducer = (state, action) => { // reducer is a function which update state based on action
    switch (action) {
        case 'increment':
            return state + 1;

        case 'decrement':
            return state - 1;

        case 'reset':
            return 0;

        default:
            return state;
    }
}
function UseReducerHookExample() {
    const [count, dispatch] = useReducer(reducer, 0); // initial value of count is 0
    return (<>
        <h1>useReducer Hook Example</h1>
        <div>Count is {count}</div>
        <button className='btn btn-primary m-2' onClick={() => dispatch("increment")}>Increment</button>
        <button className='btn btn-primary m-2' onClick={() => dispatch("decrement")}>Decrement</button>
        <button className='btn btn-primary m-2' onClick={() => dispatch("reset")}>Reset</button>
    </>);
}

export default UseReducerHookExample;