import React, { useContext, useEffect, useState } from "react";
import PageHelmet from "../../../Components/PageHelmet/PageHelmet";
import { ThemeMoodContext } from "../../../Providers/ThemeProvider";
import useAuth from "../../../Hooks/useAuth";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  RadialBarChart,
  RadialBar,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
} from "recharts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// pie chart start______________________________________________________
const pieColors = ["#00C49F", "#EF4444", "#FFBB28"];
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

// pie chart end_______________________________

// simple radial bar chart start _____________

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

// simple radial bar chart end _____________

const InstructorHome = () => {
  const { Dark } = useContext(ThemeMoodContext);
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [StackData, setData] = useState([]);
  useEffect(() => {
      axiosSecure.get(`https://summer-camp-server-one.vercel.app/instructorStack/${user?.email}`)
      .then((dataStack) => {
          setData(dataStack.data)
      }
      )
  }, [user]);



  const { allClasses, classStatus } = StackData;

  return (
    <div className="w-full p-5 md:p-16">
      <PageHelmet>Dashboard</PageHelmet>
      <h1 className={`text-2xl text-center mb-8 font-semibold ${Dark && "text-white"}`}>
        Welcome, {user?.displayName}{" "}
      </h1>
      <h1 className={`text-2xl font-semibold text-center ${Dark && "text-white"}`}>
        Your Class Status
      </h1>

      <div className="flex my-8 overflow-hidden  gap-9 flex-col md:flex-row items-center justify-center">
        <div className="flex-1">

          <ResponsiveContainer width="100%" height={250}>
            <PieChart width={100} height={100}>
              <Pie
                data={classStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {classStatus?.map((entry, index) => (
                  <Cell
                    name={entry.name}
                    key={`cell-${index}`}
                    fill={pieColors[index % pieColors.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
              <Tooltip></Tooltip>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex-1 " style={{ width: '100%', height: '300px' }}>

          <ResponsiveContainer  width="100%" height={300}>
            <LineChart
              data={allClasses}
            
              margin={{
                top: 5,
                right: 30,
                left: -30,
                bottom: 15,
              }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="className" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="enrolled"
                stroke="#8884d8"
                activeDot={{ r: 6 }}
              />
              <Line type="monotone" dataKey="availableSeats" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
