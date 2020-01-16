import React, { useState, useEffect, useLayoutEffect } from "react";

export function App() {
  const [clicks, setClicks] = useState(0);
  const [sideEffects, setSideEffects] = useState(0);
  const [cleanups, setCleanups] = useState(0);

  /*
    useLayoutEffect cleanup 
    useLayoutEffect 
    requestAnimationFrame 
    useEffect cleanup 
    useEffect 

    window.requestAnimationFrame(() => console.log("requestAnimationFrame"));

    useLayoutEffect(() => {
      console.log("useLayoutEffect");
      return () => {
        console.log("useLayoutEffect cleanup");
      };
    });
  */

  /*
    useEffect FLOW:
    1.) initial render(cDM): runs callback, loads cleanup for next render
    *** update occurs (state component updates) ***
    2.) render phase (component re-renders)
    3.) cleanup runs (per load from initial render)
    4.) cleanup loaded for next render (returned callback) function runs
    5.) cleanup callback runs

    *NOTE:
    useEffect forms a closure over the values only once 
    during the update->render->cleanup->useEffect cycle; 
    during update. 
  */

  /*
    cleanup callback: 
    useEffect: Called 
    setSideEffect: 
    setCleanups callback:
  */

  useEffect(() => {
    setSideEffects(count => count + 1);
    return () => setCleanups(count => count + 1);
  }, [clicks]);

  const resetClicks = () => {
    setClicks(0);
    setSideEffects(0);
    setCleanups(-1);
  };

  return (
    <div className="App">
      <h1>clicks: {clicks}</h1>
      <h1>sideEffects: {sideEffects}</h1>
      <h1>cleanups: {cleanups}</h1>
      <button onClick={() => setClicks(clicks + 1)}>click me</button>
      <button onClick={resetClicks}>Reset</button>
    </div>
  );
}
