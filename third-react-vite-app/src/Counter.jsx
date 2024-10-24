import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleRemove = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  return (
    <div
      style={{
        border: "2px dotted yellow",
        borderRadius: "15px",
        margin: "20px",
      }}
    >
      <h3>Counter : {count} </h3>
      <button onClick={handleAdd}>add</button>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
}
export default Counter;
