"use client";

import { date } from "data/data";
import icon from "public/arrows.svg";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import useGrab from "../hooks/useGrab";
import Card from "./Card";

function Date() {
  const ref = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  useGrab(".date");

  useEffect(() => {
    const { current } = ref;
    setScrollWidth(current?.scrollWidth as number);
  }, []);
  return (
    <div
      className="flex-1 mt-5 relative flex items-center overflow-visible"
      style={{ "--width": `${scrollWidth}px` } as React.CSSProperties}
    >
      <button className="w-[35px] h-[35px] bg-white p-2 rounded-full absolute shadow-lg left-2 top-3">
        <Image src={icon} className="w-full h-full" alt="" />
      </button>
      <button className="w-[35px] h-[35px] bg-white p-2 rounded-full absolute shadow-lg right-2 top-3">
        <Image src={icon} className="w-full h-full rotate-180" alt="" />
      </button>
      <div className="date mx-10 my-5 flex flex-col w-full overflow-auto h-full cursor-grab">
        <div className="dates flex border-b-4" ref={ref}>
          {date.map((item, i) => (
            <div
              key={item + i}
              className="text-center text-blue-500 text-xl grid place-items-center h-[50px]"
            >
              <span className="block w-[150px]">{item}</span>
            </div>
          ))}
        </div>
        <div className="card-container border-b-4 py-5 relative z-[3] overflow-visible">
          <Card className="ms-[10%]" />
        </div>
        <div className="card-container border-b-4 py-5 relative z-[2] overflow-visible">
          <Card className="ms-[70%]" />
        </div>
        <div className="card-container border-b-4 py-5 relative z-[1] overflow-visible">
          <Card className="ms-[30%]" />
        </div>
      </div>
    </div>
  );
}

export default Date;
