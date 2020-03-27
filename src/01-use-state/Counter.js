import React, { useState } from 'react'

const Counter = (props) => {
  const { startingValue } = props;

  // Simple state variable with a default value
  const [count, setCount] = useState(startingValue || 0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count - 1)}>- 1</button>
      <button onClick={() => setCount(count + 1)}>+ 1</button>
    </div>
  )
}

export default Counter;