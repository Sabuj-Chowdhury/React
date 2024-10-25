import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  // useState
  const [isVisited, setVisit] = useState(false);

  // handleVisit
  const handleVisit = () => {
    setVisit(!isVisited);
  };

  console.log(country);
  // object destructure
  const { name, flags, population, cca3, area } = country;

  return (
    <div className={`country ${isVisited && "visited"}`}>
      <h3>Name: {name.common} </h3>
      <img src={flags.png} alt="" />
      <p>
        <small>Population : {population}</small>
      </p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <div
        style={{
          backgroundColor: "yellowgreen",
          color: "black",
          margin: "0 auto",
          marginBottom: "10px",
          borderRadius: "15px",
        }}
      >
        {isVisited && "VISITED"}
      </div>
      <div className="btnCountry">
        <button onClick={handleVisit}>{isVisited ? "Visited" : "Visit"}</button>
        <button>Mark</button>
      </div>
    </div>
  );
};

export default Country;
