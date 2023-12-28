import React from "react";
import { LuListTodo } from "react-icons/lu";

interface TodoCardType {
  title: string;
  completed: boolean;
}

const TodoCard = ({ title, completed }: TodoCardType) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="bg-light h-[30px] w-[30px] rounded-md grid place-items-center">
          <LuListTodo />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-gray-900 font-semibold text-sm">{title}</h4>
            {completed ? (
              <div className="w-fit py-[1px] px-2 rounded-md ring-1 ring-green-500 bg-green-100 text-green-500 text-[.7rem]">
                Completed
              </div>
            ) : (
              <div className="w-fit py-[1px] px-2 rounded-md ring-1 ring-yellow-500 bg-yellow-100 text-yellow-500 text-[.7rem]">
                Pending
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoCard;
