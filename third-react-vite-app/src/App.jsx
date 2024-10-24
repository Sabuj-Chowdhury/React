import { useState } from "react";
import Counter from "./Counter";
import Team from "./Team";
import Posts from "./Posts";
import "./App.css";

function App() {
  function handleClickme() {
    alert("button clicked");
  }

  const habdleClickme2 = () => {
    alert("click me 2 clicked");
  };

  const addTwoNumber = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React core concept</h3>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClickme}>Click me</button>

      <button onClick={habdleClickme2}>click me2</button>
      <button onClick={() => alert("third clicked")}>third</button>
      <button
        onClick={() => {
          addTwoNumber(6);
        }}
      >
        four
      </button>
      <hr />

      <Posts></Posts>
      <hr />
    </>
  );
}

export default App;
