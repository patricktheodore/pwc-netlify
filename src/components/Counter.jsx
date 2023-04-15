import { useState, useEffect } from "react";
import "./Counter.css";

export default function Counter({ children, count: initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [data, setData] = useState({});
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  useEffect(() => {
    fetch("/.netlify/functions/contentful")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);


  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}
