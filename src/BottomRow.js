import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {

  const [down, setDown] = React.useState(1);
  const [yardsToGo, setYards] = React.useState(10);
  const [ballOn, setBallOn] = React.useState(25);
  const [quarter, setQuarter] = React.useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick = {()=> {
          setDown(down+1);
        }}>+</button>

        <button onClick = {()=> {
          setDown(down-1);
        }}>-</button>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{yardsToGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
  );
};

export default BottomRow;
