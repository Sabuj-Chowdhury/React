import { useEffect, useState } from "react";

import Country from "../Country.jsx/country";
import "./Countries.css";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <p>Countries : {countries.length} </p>
      <div className="gridDisplay">
        {countries.map((country) => (
          <Country key={country.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
