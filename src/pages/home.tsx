import React, { ReactElement } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BsClipboardCheck } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { IoTimerOutline } from "react-icons/io5";
import DailyCards from "../components/dailyCards";
import TaskDone from "../components/tastDone";
import TaskCard from "../components/taskCard";

const Home = () => {
  interface CardValues {
    icon: ReactElement;
    title: string;
    value: number;
    message: string;
    messageValue: number;
    stroke: string;
  }

  const cardValues: CardValues[] = [
    {
      icon: <AiOutlineStar />,
      title: "Task Completed",
      value: 8,
      message: "more\nfrom last week",
      messageValue: 10,
      stroke: "#A514F4",
    },

    {
      icon: <LuClipboardList />,
      title: "New Task",
      value: 10,
      message: "more\nfrom last week",
      messageValue: 10,
      stroke: "#84CC4A",
    },
    {
      icon: <BsClipboardCheck />,
      title: "Project Completed",
      value: 30,
      message: "more\nfrom last week",
      messageValue: 10,
      stroke: "#FF6B56",
    },
    {
      icon: <IoTimerOutline />,
      title: "Pending Projects",
      value: 5,
      message: "more\nfrom last week",
      messageValue: 10,
      stroke: "#1EA7FF",
    },
  ];

  return (
    <div className="mb-5 py-3 md:px-5 px-3">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 md:gap-5 gap-3">
        {cardValues.map((data, index) => {
          const { icon, message, messageValue, stroke, title, value } = data;

          return (
            <DailyCards
              key={index}
              icon={icon}
              title={title}
              value={value < 9 ? `0${value}` : value}
              message={message}
              messageValue={messageValue}
              stroke={stroke}
            />
          );
        })}
      </div>

      <div className="flex lg:flex-row flex-col mt-5 md:gap-5 gap-3">
        <div className="lg:basis-2/3 md:basis-1/2 basis-0">
          <TaskDone />
        </div>
        <div className="lg:basis-2/3 md:hidden">
          <TaskCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
