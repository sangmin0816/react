import React, { useReducer, useState } from "react";
import Button from "react-bootstrap/Button";

const Test7 = () => {
  const [initValue, setInitValue] = useState(0);
  const initState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case "CountUp":
        let added = state.count + action.step;
        if (added <= action.max) {
          return { count: added };
        }
        return state;
      case "CountDown":
        let omitted = state.count - action.step;
        if (omitted >= action.min) {
          return { count: omitted };
        }
        return state;
      case "Random":
        return {
          count:
            Math.floor(Math.random() * (action.max - action.min)) + action.min,
        };
      case "Reset":
        return { count: 0 };
      default:
        throw new Error("action.type 에러");
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const step = 10;
  const max = 100;
  const min = -100;

  return (
    <>
    
      <p>단계: {step}, 최대: {max}, 최소: {min}</p>
      <h2>현재값: {state.count}</h2>
      <hr />
      <Button variant="outline-primary" onClick={() => { dispatch({ type: "CountUp", step, max });}}>증가</Button>
      <Button variant="outline-danger" onClick={() => { dispatch({ type: "CountDown", step, min });}}>감소</Button>
      <Button variant="outline-success" onClick={() => { dispatch({ type: "Random", step, max, min });}}>난수</Button>
      <Button variant="outline-dark" onClick={() => {dispatch({ type: "Reset" });}}>초기화</Button>

    </>
  );
};

export default Test7;
