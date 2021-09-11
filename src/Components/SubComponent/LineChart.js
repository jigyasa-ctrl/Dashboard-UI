import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

/* Line chart component */

const dataDefault = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function LineCharts({ data }) {
  const graphData = data;

  return (
    <ResponsiveContainer height={250} width="100%">
      <LineChart
        data={graphData ? graphData : dataDefault}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          layout="horizontal"
          iconType="circle"
          align="right"
          wrapperStyle={{ top: "-30%" }}
        />
        <Line
          type="monotone"
          dataKey="Users"
          stroke="#9BDD7C"
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="Guest"
          stroke="#E9A0A0"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default LineCharts;
