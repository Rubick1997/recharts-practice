import React from "react";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "January",
    iphone: 4000,
  },
  {
    name: "March",
    iphone: 1000,
  },
  {
    name: "May",
    iphone: 4000,
  },
  {
    name: "July",
    iphone: 800,
  },
  {
    name: "October",
    iphone: 1500,
  },
];

function App() {
  return (
    <>
      <h2>Quartelry sales figures for Iphones</h2>
      <ResponsiveContainer width="99%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 15,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={true}
            stroke="#243240"
          />
          <XAxis dataKey="name" tick={{ fill: "#fff" }} />
          <YAxis tick={{ fill: "#fff" }} />
          <Tooltip
            contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={true}
          />
          <Line
            type="monotone"
            dataKey="iphone"
            stroke="#8884d8"
            strokeWidth="5"
            dot={{ fill: "2e4355", stroke: "#8884d8", strokeWidth: 2, r: 5 }}
            activeDot={{
              fill: "2e4355",
              stroke: "#8884d8",
              strokeWidth: 5,
              r: 10,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
