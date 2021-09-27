import React, { useState } from "react";
import { render } from "react-dom";
import TextField from "@material-ui/core/TextField";
import TextField from "@material-ui/core/Button";

const CompundInterest = () => {
  const [amount, setAmount] = useState();
  const [weeks, setWeeks] = useState();
  const [interest, setInterest] = useState();
  const [result, setResult] = useState();

  const calculate = () => {
    // A=p(1+(r/n))^(nt)
    const result = amount * Math.pow(1 + interest, weeks);
    setResult(amount, toFixed(2));
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "40vh",
      }}
    >
      <form>
        <TextField
          label="What is the amount?"
          variant="outlined"
          type="number"
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          label="How many weeks?"
          variant="outlined"
          onChange={(e) => setWeeks(e.targer.value)}
        />
        <TextField
          label="Weekly Interest rate?"
          variant="outlined"
          type="number"
          onChange={(e) => setInterest(e.targer.value / 100)}
        />
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          type="number"
          onClick={() => {
            calculate();
          }}
        >
          Calculate
        </Button>
        <br />
        <br />
        <div style={{ fontSize: "30px" }}>€{result}</div>
      </form>
    </div>
  );
};

render(<CompundInterest />, document.querySelector("#root"));
