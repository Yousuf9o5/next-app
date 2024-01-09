import { days } from "data/data";
import React from "react";
import useGrab from "../hooks/useGrab";

function Calender() {
  useGrab(".calender");

  return (
    <div className="calender p-5 pb-0 flex items-center gap-3 overflow-auto relative cursor-grab">
      {days.map((day, i) => {
        return (
          <div
            key={day.name + day.num}
            className={`flex gap-[0.5rem] flex-col justify-center ${
              i === 0 && "!text-blue-500"
            }`}
          >
            <p
              className={`text-center w-[100px] text-xl ${
                i == 0 ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {day.name}
            </p>
            <p className="text-center w-[100px] text-xl">{day.num}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Calender;
