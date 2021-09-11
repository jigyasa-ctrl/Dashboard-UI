import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Usersui from "./Usersui";

/* Uers main Page */ 

function Users() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div
        class="topbar-container"
        style={{ overflow: "overlay", height: "40rem" }}
      >
        <Topbar title="Users" />
        <Usersui />
      </div>
    </div>
  );
}

export default Users;
