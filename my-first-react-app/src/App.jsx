import { useState } from "react";

import "./App.css";
import Hello from "./Hello";

function App() {
  return (
    <>
      <h3>LEARNING REACT</h3>
      <Hello Name="Sabuj" Class={11}></Hello>
      <Hello Name="kuddus"></Hello>
      <Hello Name="Buddus"></Hello>
    </>
  );
}

export default App;
