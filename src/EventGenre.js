import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
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
          cx={200}
          cy={150}
          labelLine={false}
          outerRadius={90}
          fill="red"
          datakey="value"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
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
