import "./App.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [searched, setSearched] = useState({
    amount: 0,
    from: "USD",
    to: "EUR",
  });

  useEffect(() => {
    if (!searched.amount || searched.amount <= 0) return;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.frankfurter.app/latest?amount=${searched.amount}&from=${searched.from}&to=${searched.to}`
        );
        setData(res.data.rates[searched.to]);
      } catch (err) {
        console.error("Error fetching data:", err);
        setData(0);
      }
    };
    if (searched.from === searched.to) return setData(searched.amount);

    fetchData();
  }, [searched]);

  return (
    <>
      <h1>Currency Conventer</h1>
      <input
        type="text"
        onChange={(e) => {
          setSearched({ ...searched, amount: Number(e.target.value) });
        }}
      />
      <select
        name=""
        id=""
        value={searched.from}
        onChange={(e) => {
          setSearched({ ...searched, from: e.target.value });
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        name=""
        id=""
        value={searched.to}
        onChange={(e) => {
          setSearched({ ...searched, to: e.target.value });
        }}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {data && (
        <p>
          {data} {searched.to}
        </p>
      )}
    </>
  );
}

export default App;
