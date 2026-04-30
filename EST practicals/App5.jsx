import { useState } from 'react';

function App5() {
    const [count, setCount] = useState(0);

    function Increment() {
        setCount(count + 1);
        console.log(count); 
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={Increment}>Increment</button>
        </>
    );
}

export default App5;
