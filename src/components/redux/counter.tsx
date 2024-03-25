import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./reducer";
import { Button } from "antd";

interface rootState {
  counter: {
    value: number;
  };
}
export function Counter() {
  const count = useSelector((state: rootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    
      <div>
      <h1>{count}</h1>
        <Button danger type="primary" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
        <Button type="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
      </div>
    
  );
}
