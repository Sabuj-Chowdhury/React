import { useState } from "react";

import Todo from "./Todo";
import Singers from "./Singers";
import Actor from "./Actor";
import "./App.css";

function App() {
  const actors = ["raazzek", "salman khan", "Sabana", "moushumi"];
  const singers = [
    { id: "1", name: "Sabuj Chowdhury", age: "30" },
    { id: "2", name: "Nikhil", age: "70" },
    { id: "3", name: "Lata Mangeskhor", age: "80" },
  ];
  return (
    <>
      <h3>Vite + React</h3>
      <Actor name="bappa Raj"></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}

      {singers.map((singer) => (
        <Singers name={singer.name} age={singer.age}></Singers>
      ))}

      {/* <Todo task="learn React" isDone={true}></Todo>
      <Todo task="Explore core concept" isDone={false}></Todo>
      <Todo task="Vite Explore" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="34"></Device>
      <Device name="mobile" price="17"></Device>
      <Device name="watch" price="55"></Device>
      <Person></Person>

      <Student grade="7" score="99"></Student>
      <Student grade="11" score="87"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h2>
      This Device :{props.name}, Price:{props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = {
    name: "sakib",
    age: "12",
  };
  return (
    <h3>
      I am a {person.name} with age: {person.age}
    </h3>
  );
}

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a Student</h3>
      <p>Class:{grade}</p>
      <p>Score: {score} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px dotted yellow",
    borderRadius: "15px",
  };
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px dotted yellow",
        borderRadius: "15px",
      }}
    >
      <h3>devo devo</h3>
      <p>coding: </p>
    </div>
  );
}

export default App;
