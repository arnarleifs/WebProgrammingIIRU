import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { incrementCounter } from '../../actions/counterActions';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();

  return (
    <>
      <div>Counter is {counter}</div>
      <button onClick={() => {
        setCounter(counter + 1);
        dispatch(incrementCounter(5));
      }}>Increment counter</button>
    </>
  )
};

export default Counter;