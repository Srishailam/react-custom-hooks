import React, {useRef, useState, useEffect} from 'react'

const useInterval = (cb, delay) => {
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

const ResourceCounter = props => {
  const [resource, setResource] = useState(0);
  useInterval(() => {
    setResource(resource + 1);
  }, 5000)
  return <p>{resource}</p>
}

export default ResourceCounter;
