import React, { useState, useEffect } from "react";
import User from "./SubComponent/User";
import axios from "axios";

/* users main page component */

function Usersui() {
  const [apiData, setApiData] = useState([]);
  const [filter, setFilter] = useState([]);
  function filterData(value) {
    setFilter(apiData[4].filter((data) => data.name == value));
    setFilter(apiData[4].filter((data) => data.email == value));
    if (value === "Admin") {
      setFilter(apiData[4].filter((data) => data.userRole == value));
    } else if (value === "User") {
      setFilter(apiData[4].filter((data) => data.userRole == value));
    } else if (value === "Male") {
      setFilter(apiData[4].filter((data) => data.gender == value));
    } else if (value === "Female") {
      setFilter(apiData[4].filter((data) => data.gender == value));
    }
  }

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
          <input
            placeholder="Search in users.."
            onChange={(e) => filterData(e.target.value)}
          ></input>
          <select
            onChange={(e) => {
              filterData(e.target.value);
            }}
          >
            <option value="" selected>
              Filter
            </option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button>Add</button>
        </span>
      </span>

      {filter.length > 0
        ? filter.map((data) => <User value={data} />)
        : apiData.length > 0
        ? apiData[4].map((data) => <User value={data} />)
        : ""}
    </div>
  );
}

export default Usersui;
