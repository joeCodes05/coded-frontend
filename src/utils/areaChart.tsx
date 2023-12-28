import React from "react";
import {
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  AreaChart,
} from "recharts";
import { areaChart } from "../constants/chartData";

const AreaChartUtil = () => {
  return (
    <>
      <AreaChart
        width={700}
        className="xl:block hidden"
        height={258}
        data={areaChart}
      >
        <CartesianGrid opacity={0.2} vertical={false} />
        <XAxis
          style={{ fontSize: ".7rem" }}
          width={25}
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey={"uv"}
          style={{ fontSize: ".7rem" }}
          axisLine={false}
          spacing={0}
          width={25}
          tickLine={false}
        />
        <Tooltip />
        <defs>
          <linearGradient id="fillColor" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#A514F4" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#A514F4" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="fillColor2" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#FF6B56" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#FF6B56" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#A514F4"
          fill="url(#fillColor)"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#FF6B56"
          fill="url(#fillColor2)"
        />
      </AreaChart>

      <AreaChart
        width={475}
        className="lg:block xl:hidden hidden"
        height={258}
        data={areaChart}
      >
        <CartesianGrid opacity={0.2} vertical={false} />
        <XAxis
          style={{ fontSize: ".7rem" }}
          width={25}
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey={"uv"}
          style={{ fontSize: ".7rem" }}
          axisLine={false}
          spacing={0}
          width={25}
          tickLine={false}
        />
        <Tooltip />
        <defs>
          <linearGradient id="lg1" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#A514F4" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#A514F4" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="lg2" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#FF6B56" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#FF6B56" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="pv" stroke="#A514F4" fill="url(#lg1)" />
        <Area type="monotone" dataKey="amt" stroke="#FF6B56" fill="url(#lg2)" />
      </AreaChart>

      <AreaChart
        width={515}
        className="lg:hidden md:block xl:hidden hidden"
        height={258}
        data={areaChart}
      >
        <CartesianGrid opacity={0.2} vertical={false} />
        <XAxis
          style={{ fontSize: ".7rem" }}
          width={25}
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey={"uv"}
          style={{ fontSize: ".7rem" }}
          axisLine={false}
          spacing={0}
          width={25}
          tickLine={false}
        />
        <Tooltip />
        <defs>
          <linearGradient id="lg1" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#A514F4" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#A514F4" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="lg2" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#FF6B56" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#FF6B56" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="pv" stroke="#A514F4" fill="url(#lg1)" />
        <Area type="monotone" dataKey="amt" stroke="#FF6B56" fill="url(#lg2)" />
      </AreaChart>

      <AreaChart
        width={317}
        className="md:hidden block"
        height={250}
        data={areaChart}
      >
        <CartesianGrid opacity={0.2} vertical={false} />
        <XAxis
          style={{ fontSize: ".7rem" }}
          width={25}
          dataKey="name"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          dataKey={"uv"}
          style={{ fontSize: ".7rem" }}
          axisLine={false}
          spacing={0}
          width={25}
          tickLine={false}
        />
        <Tooltip />
        <defs>
          <linearGradient id="resFill1" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#A514F4" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#A514F4" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="resFill2" x1={0} y1={0} x2={0} y2={1}>
            <stop offset="0%" stopColor="#FF6B56" stopOpacity={0.4}></stop>
            <stop offset="75%" stopColor="#FF6B56" stopOpacity={0.05}></stop>
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#A514F4"
          fill="url(#resFill1)"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#FF6B56"
          fill="url(#resFill2)"
        />
      </AreaChart>
    </>
  );
};

export default AreaChartUtil;
