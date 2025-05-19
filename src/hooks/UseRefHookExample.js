import { useEffect, useRef } from 'react';

function UseRefHookExample() {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    })

    return (<>
        <h1>useRef Hook Example</h1>
        <input type='text' ref={inputRef} />
    </>);
}

export default UseRefHookExample;