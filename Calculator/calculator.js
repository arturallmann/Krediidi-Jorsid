var React, { useState }= require("react");
var { render } = require("react-dom");
var TextField = require("@material-ui/core/TextField");
var Button = require("@material-ui/core/Button");
// import form from "@material-ui/core/form";
// import div from "@material-ui/core/div";

const CompundInterest = () => {
  const [amount, setAmount] = useState();
  const [weeks, setWeeks] = useState();
  const [interest, setInterest] = useState();
  let [result, setResult] = useState();

  const calculate = () => {
    // A=p(1+(r/n))^(nt)
    result = amount * Math.pow(1 + interest, weeks);
    setResult(amount, toFixed(2));
  };

  render();
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
          onChange={(e) => setWeeks(e.target.value)}
        />
        <TextField
          label="Weekly Interest rate?"
          variant="outlined"
          type="number"
          onChange={(e) => setInterest(e.target.value / 100)}
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
        <div style={{ fontSize: "30px" }}>"€"+${result}</div>
      </form>
    </div>
  );
};

ReactDOM.render(<CompundInterest />, document.querySelector("FirstApp"));
