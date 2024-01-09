"use client";

import React, { useState } from "react";
import icon from "public/arrows.svg";
import cPrice from "public/captain-price.jpg";
import Image from "next/image";

type Props = {
  header?: string;
  sideText?: string;
  desc?: string;
  className: string;
};

function Card(props: Props) {
  //depend on call
  const { desc, header, sideText, className } = props;
  const [active, setActive] = useState(false);

  /** ----------------------------------------
   *
   * for better look i can use random for rgb :)
   *
   * *linear-gradient(to left, rgb(${rand}, ${rand}, ${rand}), rgb(${rand}, ${rand}, ${rand}))
   *
   *--------------------------------------*/

  const bg = "linear-gradient(to left, rgb(141, 186, 255), rgb(83, 144, 235))";

  const style = {
    background: bg,
  } as React.CSSProperties;

  return (
    <div className={`relative w-fit ${className}`}>
      <div
        className="relative z-[2] flex flex-row items-center gap-3 py-1 ps-2 pe-4 overflow-visible rounded-[4rem] w-[400px]"
        style={style}
      >
        <div className="h-[60px] w-[60px] overflow-hidden rounded-full">
          <Image className="w-full h-full object-cover" src={cPrice} alt="" />
        </div>
        <p className="text-white flex-1 text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          quaerat.
        </p>
        <button
          onClick={() => setActive(!active)}
          className="bg-white p-3 rounded-full w-[40px] h-[40px] grid place-items-center"
        >
          <Image
            className={`${
              active ? "rotate-[-270deg]" : "rotate-[-90deg]"
            } w-full h-full`}
            src={icon}
            alt=""
          />
        </button>
      </div>
      <span
        className={`text-white z-1 absolute rounded-lg p-3 z-1 ${
          active
            ? "opacity-1 top-[110%] max-h-[500px]"
            : "opacity-0 top-[0%] max-h-[0px] overflow-hidden"
        }`}
        style={style}
        id="bottom-text"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est eligendi,
        cumque veritatis corporis doloribus reiciendis voluptas minus! Tenetur
        sit accusamus dolorum deserunt temporibus eligendi inventore
        repudiandae. Sed veritatis nemo aliquam.
      </span>
      <div
        className={`${
          active ? "left-[90%]" : "left-[70%]"
        } grid place-items-center text-white absolute top-0 h-full ps-5 p-3 z-1 min-w-[30%] text-right rounded-r-[4rem]`}
        style={style}
        id="right-text"
      >
        <span className="ms-[10px] px-2">Lorem, ipsum.</span>
      </div>
    </div>
  );
}

export default Card;
