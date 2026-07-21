import { useEffect, useState } from "react";

function App() {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((data) => setRates(data.rates));
  }, []);

  const convert = () => {
    const ans = (amount / rates[from]) * rates[to];
    setResult(ans.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter</h2>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <button onClick={convert}>Convert</button>

      <h3>
        {amount} {from} = {result} {to}
      </h3>
    </div>
  );
}

export default App;
