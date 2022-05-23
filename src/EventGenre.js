import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];

  useEffect(() => {
    const getData = () => {
      const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
      const data = genres.map((genre) => {
        const value = events.filter((event) =>
          event.summary.split(" ").includes(genre)
        ).length;
        return { name: genre, value };
      });
      return data;
    };
    setData(() => getData());
  }, [events]);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#663399"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.2;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.2;
    const percentVal = percent * 100;
    return percentVal === 0 ? null : (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${percentVal.toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer height={400}>
      <PieChart
        className="pie-chart"
        width={300}
        height={300}
        margin={{
          top: 20,
          right: 0,
          bottom: 20,
          left: 30,
        }}
      >
        <Pie
          data={data}
          cy={150}
          labelLine={false}
          outerRadius={80}
          fill="red"
          datakey="value"
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
