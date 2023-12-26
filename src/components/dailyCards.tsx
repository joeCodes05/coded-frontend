import React, { ReactElement } from "react";
import { Line, LineChart, Tooltip } from "recharts";

interface CardProps {
  icon: ReactElement;
  title: string;
  value: number | string;
  message: string;
  messageValue: number;
  stroke: string;
}

const DailyCards = ({
  icon,
  title,
  value,
  message,
  messageValue,
  stroke,
}: CardProps) => {
  interface ChartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }

  const data: ChartData[] = [
    {
      name: "Page A",
      uv: 1,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 1500,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 700,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 1700,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1300,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2000,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 2700,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page H",
      uv: 1600,
      pv: 4300,
      amt: 2100,
    },
  ];

  const CustomizedDot = () => {
    return null;
  };

  const newMessage = message.split("\n");

  return (
    <>
      <div className="bg-white p-4 rounded-[16px] shadow">
        <div className="flex items-center pb-3 border-b">
          <div className="flex gap-3 text-gray-400 items-center">
            <div className="bg-gray-100 h-[30px] w-[30px] rounded-md grid place-items-center">
              {icon}
            </div>
            <div className="text-sm">{title}</div>
          </div>
          <div className="ml-auto text-gray-900 text-lg font-semibold">
            {value}
          </div>
        </div>
        <div className="mt-3 flex items-center">
          <LineChart
            width={100}
            height={100}
            className="md:block hidden"
            data={data}
          >
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke={stroke}
              dot={<CustomizedDot />}
            />
          </LineChart>

          <LineChart
            width={200}
            height={100}
            className="md:hidden block"
            data={data}
          >
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke={stroke}
              dot={<CustomizedDot />}
            />
          </LineChart>
          <div className="text-sm font-light text-gray-400 text-right">
            <span className="text-primary font-semibold">{messageValue}+</span>{" "}
            {newMessage[0]} <br /> {newMessage[1]}
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyCards;
