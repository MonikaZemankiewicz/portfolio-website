"use client";
import React from "react";
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SkillsChart = () => {
  const chartData = [
    { skill: "HTML", level: 8 },
    { skill: "CSS", level: 7 },
    { skill: "JS", level: 5 },
    { skill: "Python", level: 5 },
    { skill: "React", level: 5 },
    { skill: "Django", level: 5 },
  ];
  return (
    <div className="flex justify-center items-center">
      <RadarChart outerRadius={90} width={730} height={250} data={chartData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="skill" />
        <Radar
          name="Skills"
          dataKey="level"
          stroke="#121212"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Tooltip />
      </RadarChart>
    </div>
  );
};

export default SkillsChart;
