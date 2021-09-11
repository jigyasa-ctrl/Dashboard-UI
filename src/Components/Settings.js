import React, {useState, useEffect} from "react";
import DashUi from "./DashUi";
import SettingsUI from "./SettingsUI";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import axios from "axios";

function Settings() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jigyasa-ctrl.github.io/public-api/dashboard.json")
      .then((response) => {
        setApiData(response.data);
      });
      console.log(apiData,"huhu")
  }, []);
  return (
    <div class="dashboard">
      <Sidebar />
      <div
        class="topbar-container"
        style={{ overflow: "overlay", height: "40rem" }}
      >
        <Topbar title="Settings" />
        {apiData.length > 0 && <SettingsUI data={apiData[5]}/>}
      </div>
    </div>
  );
}

export default Settings;
