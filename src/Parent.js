import React, { useReducer } from "react";

import App from "../src/App";
import reducer from "../src/Operations";

function Parent() {
  const [state, dispatch] = useReducer(reducer, "");

  return (
    <>
      <App state={state} dispatch={dispatch} />
    </>
  );
}
export default Parent;
