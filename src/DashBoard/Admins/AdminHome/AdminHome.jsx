import React, { useContext, useEffect, useState } from "react";
import PageHelmet from "../../../Components/PageHelmet/PageHelmet";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const AdminHome = () => {
  const { Dark } = useContext(ThemeMoodContext);
  const { user } = useAuth();
  const [data,setData] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/adminStack`)
      .then((dataStack) => {
          setData(dataStack.data)
      }
      )
  },[user])
  



console.log(data);
  return (
    <div className="p-5 md:p-14 w-full">
      <PageHelmet>Dashboard</PageHelmet>
      <h1 className={`text-2xl font-semibold ${Dark && "text-white"}`}>
        Welcome, {user?.displayName}{" "}
      </h1>

      <div>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart width={2000} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
                <Cell name={entry.name} key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
          </Pie>
                <Legend></Legend>
                <Tooltip></Tooltip>
        </PieChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminHome;
