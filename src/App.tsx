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
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          horizontal={true}
          vertical={true}
        />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="iphone"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default App;
