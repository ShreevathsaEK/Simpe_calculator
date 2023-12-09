import React from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import Parent from "../src/Parent";

function ErrorFallback({ error, componentStack, resetErrorBoundary }) {
  return (
    <div role="alert" className='alert-div'>
      <p>What?!? You Crashed The Website By Doing Stupid Calculations <span>🤦‍♂️</span></p>
      <pre>You'll Need To Refresh The Website...</pre>
      <button className='refresh-btn' onClick={resetErrorBoundary}>Refresh The Website</button>
      <h6>why are you looking at the button color? it is what it is.</h6>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Parent />
    </ErrorBoundary>
  </React.StrictMode>,
  rootElement
);
