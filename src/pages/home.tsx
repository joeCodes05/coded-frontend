import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { IoTimerOutline } from "react-icons/io5";
import { Line, LineChart } from "recharts";

const Home = () => {
  interface ChartData {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }
  const data: ChartData[] = [
    {
      name: "Page A",
      uv: 1000,
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

  return (
    <div className="my-16 py-3 px-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-5">
        <div className="bg-white p-4 rounded-[16px] shadow">
          <div className="flex items-center pb-3 border-b">
            <div className="flex gap-3 text-gray-400 items-center">
              <div className="bg-gray-100 h-[30px] w-[30px] rounded-md grid place-items-center">
                <AiOutlineStar />
              </div>
              <div className="text-sm">Task Completed</div>
            </div>
            <div className="ml-auto text-gray-900 text-lg font-semibold">
              08
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <LineChart width={100} className="z-10" height={100} data={data}>
              {/* <Tooltip /> */}
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#A514F4"
                dot={<CustomizedDot />}
              />
            </LineChart>
            <div className="text-sm font-light text-gray-400 text-right">
              <span className="text-primary font-semibold">10+</span> more{" "}
              <br /> from last week
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-[16px] shadow">
          <div className="flex items-center pb-3 border-b">
            <div className="flex gap-3 text-gray-400 items-center">
              <div className="bg-gray-100 h-[30px] w-[30px] rounded-md grid place-items-center">
                <LuClipboardList />
              </div>
              <div className="text-sm">New Task</div>
            </div>
            <div className="ml-auto text-gray-900 text-lg font-semibold">
              10
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <LineChart width={100} height={100} data={data}>
              {/* <Tooltip /> */}
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#FF6B56"
                dot={<CustomizedDot />}
              />
            </LineChart>
            <div className="text-sm font-light text-gray-400 text-right">
              <span className="text-orange font-semibold">10+</span> more <br />{" "}
              from last week
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-[16px] shadow">
          <div className="flex items-center pb-3 border-b">
            <div className="flex gap-3 text-gray-400 items-center">
              <div className="bg-gray-100 h-[30px] w-[30px] rounded-md grid place-items-center">
                <BsClipboardCheck />
              </div>
              <div className="text-sm">Project Done</div>
            </div>
            <div className="ml-auto text-gray-900 text-lg font-semibold">
              30
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <LineChart width={100} height={100} data={data}>
              {/* <Tooltip /> */}
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#84CC4A"
                dot={<CustomizedDot />}
              />
            </LineChart>
            <div className="text-sm font-light text-gray-400 text-right">
              <span className="text-lime-500 font-semibold">10+</span> more{" "}
              <br /> from last week
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-[16px] shadow">
          <div className="flex items-center pb-3 border-b">
            <div className="flex gap-3 text-gray-400 items-center">
              <div className="bg-gray-100 h-[30px] w-[30px] rounded-md grid place-items-center">
                <IoTimerOutline />
              </div>
              <div className="text-sm">Pending Projects</div>
            </div>
            <div className="ml-auto text-gray-900 text-lg font-semibold">
              05
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <LineChart width={100} className="z-10" height={100} data={data}>
              {/* <Tooltip /> */}
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#A21CB7"
                dot={<CustomizedDot />}
                className="z-10"
              />
            </LineChart>
            <div className="text-sm font-light text-gray-400 text-right">
              <span className="text-fuchsia-700 font-semibold">10+</span> more{" "}
              <br /> from last week
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
