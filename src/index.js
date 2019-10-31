import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [page, setPage] = useState(1);

  const pageArray = [1,2,3,4,5,6,7,8,9,10]

  const handleChange = e => {
    setPage(e.target.value)
    console.log(page)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=true`
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, [page]);
  return (
    <div className="App">
      
      <Navbar />
      <label className="dropdown-label">
        Page:
      </label>
      <select className="dropdown" onChange={handleChange}>
        {pageArray.map(el => {
          return <option value={el}>{el}</option>
        })}
      </select>
      <Charts coinData={coinData}/>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
