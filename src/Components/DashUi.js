import React, { useEffect, useState } from "react";

import Cards from "./SubComponent/Cards";
import LineCharts from "./SubComponent/LineChart";
import Example from "./SubComponent/Piechart";
import Piecharts from "./SubComponent/Piechart";

function DashUi({ data }) {
  const [dashboardData, setDashboardData] = useState(Object.values(data[0]));
  const graphData = data[1];
  const pieData = data[2];
  const meetingsData = data[3];
  console.log(graphData, "graph");

  console.log(dashboardData);

  return (
    <div class="dashUI">
      <div className="cards">
        {dashboardData &&
          dashboardData.map((value) => (
            <Cards
              color={value.color}
              title={value.title}
              link={value.link}
              value={value.value}
            />
          ))}
      </div>
      <div class="chart">
        <h3>Activities</h3>
        <p style={{ color: "#858585" }}>May-June 2021</p>

        <LineCharts data={graphData} />
      </div>
      <div className="pie-user">
        <div class="piechart">
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <h3>Top Products</h3>
            <p style={{ color: "#858585" }}>May-June 2021</p>
          </span>
          <Example pieData={pieData} />
        </div>
        <div class="piechart">
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <h3>Today's Schedule</h3>
            <p style={{ color: "#858585" }}>See all </p>
          </span>
          {meetingsData &&
            meetingsData.map((data) => (
              <div class="meeting">
                <h5>{data.title}</h5>
                <h5 style={{ color: "#858585" }}>{data.time}</h5>
                <h5 style={{ color: "#858585" }}>{data.location}</h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default DashUi;
