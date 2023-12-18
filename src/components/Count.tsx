import React, { useState } from "react";
import classes from "./Count.module.scss";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Count = () => {
  const [count, setCount] = useState<number>(0);

  const addNumberHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const removeNumberHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className={classes.container}>
      <div
        className={classes.number}
        style={
          count === 0
            ? { color: "black" }
            : count > 0
            ? { color: "rgb(34, 34, 220)" }
            : { color: "rgb(219, 34, 34)" }
        }
      >
        {count}
      </div>
      <div className={classes.controls}>
        <div
          className={classes.btn}
          style={{ backgroundColor: "red" }}
          onClick={removeNumberHandler}
        >
          -
        </div>
        <div
          className={classes.btn}
          style={{ backgroundColor: "blue" }}
          onClick={addNumberHandler}
        >
          +
        </div>
      </div>
      <div
        className={classes.btn}
        style={{
          backgroundColor: "rgb(210, 199, 71)",
        }}
        onClick={resetHandler}
      >
        <FaArrowRotateLeft fontSize="30px" color="white" />
      </div>
    </div>
  );
};

export default Count;
