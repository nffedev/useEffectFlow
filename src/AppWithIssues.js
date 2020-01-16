import React, { useState, useEffect } from "react";

export function AppWithIssues() {
  const [clicks, setClicks] = useState(0);
  const [sideEffects, setSideEffects] = useState(0);
  const [cleanups, setCleanups] = useState(0);

  /* 
  When using useEffect, make sure the array includes any values 
  from the outer scope that change over time 
  and that are used by the effect. 
  Otherwise, your code will reference stale values from previous renders. 
  */

  /*
  setCleanups(cleanups + 1) doesn’t get called whenever useEffect does; 
  it gets called after the next update, 
  so it won’t actually get called until the button gets clicked.
  */

  useEffect(() => {
    setSideEffects(sideEffects + 1);
    return () => setCleanups(cleanups + 1);
  }, [clicks]);
  /*
    FLOW:
    1.) update phase (component updates)
    2.) render phase (component re-renders)
    3.) cleanup (returned callback) function runs
    4.) useEffect function runs (function inside useState)

    *NOTE:
    useEffect forms a closure over the values only once 
    during the update->render->cleanup->useEffect cycle; 
    during update. 
  */

  /* 
    SIDE NOTE: 
    Don't pass the state prop being updated, in useEffect
    as the array argument for useEffect. 

    DO NOT DO THIS (INFINITE LOOP!!!!)
    useEffect(() => {
      setClicks(clicks + 1)
    }, [clicks])
  */

  const resetClicks = () => {
    setClicks(0);
    setSideEffects(1);
    setCleanups(0);
  };

  return (
    <div className="App">
      <h1>clicks: {clicks}</h1>
      <h1>sideEffects: {sideEffects}</h1>
      <h1>cleanups: {cleanups}</h1>
      <button onClick={() => setClicks(clicks + 1)}>click me</button>
      <button onClick={() => resetClicks()}>Reset</button>
    </div>
  );
}
