import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <h1>Dash.</h1>
        <span>
          <p>
            <Link className="link-class" to="/dashboard">
              Dashboard
            </Link>
          </p>
          <p>Transaction</p>
          <p>Schedules</p>
          <p>
            <Link className="link-class" to="/users">
              {" "}
              Users
            </Link>
          </p>
          <p>
            <Link className="link-class" to="/settings">
              Settings
            </Link>
          </p>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
