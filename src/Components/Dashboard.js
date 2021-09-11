import React, { useState, useEffect } from "react";
import DashUi from "./DashUi";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import axios from "axios";

function Dashboard() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jigyasa-ctrl.github.io/public-api/dashboard.json")
      .then((response) => {
        setApiData(response.data);
      });
  }, []);

  return (
    <div class="dashboard">
      <Sidebar />
      <div
        class="topbar-container"
        style={{ overflow: "overlay", height: "40rem" }}
      >
        <Topbar title="Dashboard" />
        {apiData.length > 0 && <DashUi data={apiData} />}
      </div>
    </div>
  );
}

export default Dashboard;
