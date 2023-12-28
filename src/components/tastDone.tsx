import React from "react";
import AreaChartUtil from "../utils/areaChart";

const TaskDone = () => {
  interface TabButtons {
    title: string;
    state: number;
  }
  const tabButtons: TabButtons[] = [
    {
      title: "Daily",
      state: 1,
    },

    {
      title: "Weekly",
      state: 2,
    },

    {
      title: "Monthly",
      state: 3,
    },
  ];

  const updateState = (state: number) => {};

  return (
    <>
      <div className="bg-white p-4 rounded-[16px] shadow">
        <div className="flex md:flex-row flex-col md:items-center">
          <div className="mr-auto">
            <h1 className="text-gray-900 font-semibold md:text-xl text-lg">
              Completed Activities
            </h1>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              {tabButtons.map((data, index) => {
                const { title, state } = data;

                return (
                  <button
                    key={index}
                    className="bg-transparent text-sm text-gray-900 outline-none py-1 px-0 border-b-2 border-b-transparent font-[500] duration-300 hover:text-primary hover:border-b-primary"
                    onClick={() => updateState(state)}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <AreaChartUtil />
        </div>
      </div>
    </>
  );
};

export default TaskDone;
