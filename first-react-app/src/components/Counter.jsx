import { useState } from "react";

const Counter = () => {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  function stepPrevious() {
    if (step >= 1) setStep((s) => s - 1);
  }
  function stepNext() {
    setStep((s) => s + 1);
  }
  function countPrevious() {
    setCount((s) => s - 1);
  }
  function countNext() {
    setCount((s) => s + 1);
  }
  const days = step > 1 ? count * step : count;
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result.toLocaleDateString("en-US", options).replace(/,/g, "");
  }

  const formattedDate = new Date()
    .toLocaleDateString("en-US", options)
    .replace(/,/g, "");

  return (
    <>
      <div
        className="step-counter"
        style={{ display: "flex", gap: "15px", marginBottom: "20px" }}
      >
        <button onClick={stepPrevious}>-</button>
        <p>
          Step: <span>{step}</span>
        </p>
        <button onClick={stepNext}>+</button>
      </div>
      <div
        className="count-counter"
        style={{ display: "flex", gap: "15px", marginBottom: "20px" }}
      >
        <button onClick={countPrevious}>-</button>
        <p>
          Count: <span>{days}</span>
        </p>
        <button onClick={countNext}>+</button>
      </div>
      <div className="message">
        {count === 0
          ? `Today is Sun Mart 2 2025`
          : `${days} days from  today is ${addDays(formattedDate, days)}`}
      </div>
    </>
  );
};

export default Counter;
