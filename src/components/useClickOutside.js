import { useEffect, useRef } from "react"

const useClickInside = (ref, cb) => {
  const handleClick = e => {
    if(ref.current && !ref.current.contains(e.target)){
      cb();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    }
  })
}


const HitOutsideBox = ({onClickInside}) => {
  const clickRef = useRef();
  useClickInside(clickRef, onClickInside);

  return(
    <div 
      className="hit-box"
      ref={clickRef}
      style={{
        border: '5px solid green',
        height: 300,
        width: 600,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p>Hit outside the Box!</p>
    </div>
  )
}

export default HitOutsideBox;