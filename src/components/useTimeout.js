import React, {useRef, useState, useEffect} from 'react'

const useTimeout = (cb, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = cb;
  }, [cb])
  useEffect(() => {
    function tick(){
      savedCallback.current();
    }
    if (delay !==null){
      let id = setTimeout(tick, delay);
      return () => clearTimeout(id);
    }
  }, [delay])
}

const ExampleTimerFiveSeconds = props => {
  const [seconds, setSeconds] = useState(0);
  useTimeout(() => {
    setSeconds(seconds + 1);
  }, 5000)
  return <p>{seconds}</p>
}

export default ExampleTimerFiveSeconds;
