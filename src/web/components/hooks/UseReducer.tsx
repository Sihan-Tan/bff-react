import React, { FC, useReducer } from "react";

const initialState = { count: 0 };

type ACTION_TYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTION_TYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

const UseReducer: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const style = {
    marginTop: "10px",
  };
  return (
    <div style={style}>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </div>
  );
};

export default UseReducer;
