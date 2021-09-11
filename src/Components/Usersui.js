import React, { useState, useEffect } from "react";
import User from "./SubComponent/User";
import Topbar from "./Topbar";
import axios from "axios";

function Usersui() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jigyasa-ctrl.github.io/public-api/dashboard.json")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);
  return (
    <div className="chart">
      <span>
        <h3>Users Records</h3>
        <span className="user-search">
          <input placeholder="Search in users.."></input>
          <select>
            <option value="" selected>
              Filter
            </option>
            <option value="tesla">Tesla</option>
            <option value="volvo">Volvo</option>
            <option value="mercedes">Mercedes</option>
          </select>
          <button>Add</button>
        </span>
      </span>

      {apiData.length > 0 && apiData[4].map((data) => <User value={data} />)}
    </div>
  );
}

export default Usersui;
