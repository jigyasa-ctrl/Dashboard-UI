import React from "react";
import User from "./SubComponent/User";
import Topbar from "./Topbar";

function Usersui() {
    function hello(){
        console.log("hi")
    }
  return (
    <div className="chart">
      <span>
        <h3>Users Records</h3>
        <span className="user-search">
          <input placeholder="Search in users.."></input>
          <select onChange={hello}>
          <option value="" selected>Filter</option>
            <option value="tesla">Tesla</option>
            <option value="volvo">Volvo</option>
            <option value="mercedes">Mercedes</option>
          </select>
          <button>Add</button>
        </span>
      </span>
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}

export default Usersui;
