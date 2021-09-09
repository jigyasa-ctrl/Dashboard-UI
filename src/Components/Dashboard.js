import React from "react";
import DashUi from "./DashUi";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

function Dashboard() {
  return (
    <div class="dashboard">
      <Sidebar />
      <div class="topbar-container" style={{overflow: 'overlay', height: '40rem'}}>
        <Topbar />
        <DashUi />
      </div>
    </div>
  );
}

export default Dashboard;
