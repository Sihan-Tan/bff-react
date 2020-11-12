import React, { FC } from "react";
import UseState from "@components/hooks/UseState";
import UseReducer from "@components/hooks/UseReducer";
import UseEffect from "@components/hooks/UseEffect";
import UseContext from "@components/hooks/UseContext";

const Hooks: FC = () => {
  return (
    <div>
      <h2>Hooks</h2>
      <UseState>useState</UseState>
      <UseReducer></UseReducer>
      <UseEffect />
      <UseContext />
    </div>
  );
};
export default Hooks;
