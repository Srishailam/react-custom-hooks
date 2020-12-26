import React, { useEffect, useRef, useState } from 'react'

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  })
  return ref.current;
}

const MoneyCount = () => {
  const [value, setValue] = useState(0);
  const lastValue = usePrevious(value);

  return (

    <div>
      <p> Current: {value} - Previous: {lastValue}</p>
      <button onClick={() => setValue(value + 1)}>Increment Money</button>
    </div>
  )
}


export default MoneyCount
