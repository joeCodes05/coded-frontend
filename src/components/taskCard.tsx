import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import TodoCard from "../utils/todoCard";
import { IoChevronDown } from "react-icons/io5";

const TaskCard = () => {
  const [todoValue, setTodoValue] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoValue(e.target.value);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-t-[20px] rounded-[16px] shadow">
        <h1 className="text-gray-900 font-semibold md:text-xl text-lg">
          Daily Todo
        </h1>
        <div className="mt-3 pb-3 border-b">
          <div className="flex flex-row gap-3">
            <input
              type="text"
              value={todoValue}
              onChange={onChange}
              className="py-1.5 px-2 bg-light rounded-md w-full outline-none placeholder:text-sm"
              placeholder="Add new todo"
            />
            <button className="h-[40px] w-[50px] rounded-md bg-primary duration-300 text-white grid place-items-center overflow-hidden text-2xl opacity-100">
              <IoIosAdd />
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-col space-y-[10px]">
          <TodoCard title="Wash the cars" completed={true} />
          <TodoCard title="Wash clothes" completed={false} />
          <TodoCard title="Walk the dog" completed={false} />
          <TodoCard title="Read books" completed={false} />

          <button className="m-3 rounded-full py-2 px-10 mx-auto shadow-lg text-sm w-fit bg-light text-gray-900 flex items-center gap-2 animate-bounce">
            <div>See more</div> <IoChevronDown />
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
