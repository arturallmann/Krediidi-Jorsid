import { useState } from "react";
import ReactDOM from "react-dom";

function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

ReactDOM.render(<MyForm />, MyForm.getElementById('root'));




export default function Home() {
    return (
        <form>
            <label className="font size">Krediidi Jorsid</label>
            <br/>
                <input type="text" placeholder="eesnimi" name="firstName"></input>
                <input type="text" placeholder="perekonnanimi" name="lastName"></input>
                <input type="text" placeholder="telefon" name="contact"></input>
                <input type="number" placeholder="konto number" name="accountnum"></input>
                <select><option value="corporation">juriidiline jan</option></select>
                <input type="number" placeholder="registratsiooni number" name="regNr"></input>
                <input type="number" placeholder="laenatav summa" name="amount"></input>
                <input type="number" placeholder="intress" name="interest"></input>
                <input type="date-time" placeholder="maksuperiood" name="paymentPeriod"></input>
                <input type="number" placeholder="viivis" name="penalty"></input>
                <input type="date-time" placeholder="sõlmimise kuupäev" name="createdAt"></input>
                <input type="submit" value="Submit" />

        </form>

    )
}