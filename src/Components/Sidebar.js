import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <h1>Dash.</h1>
        <img className="close" onClick={() => document.getElementsByClassName('sidebar')[0].style.display = 'none'} src="https://img.icons8.com/windows/32/ffffff/close-window.png"/>
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
        <span class="sidebar-bottom">
          <p> <Link className="link-class" to="/">
              Logout
            </Link></p>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
