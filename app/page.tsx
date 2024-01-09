"use client";

import Calender from "components/Calender";
import Date from "components/Date";
import "style/style.css";

// يلعن ميتين ام tailwind -_-
export default function Home() {
  return (
    <main className="flex flex-col py-5 w-screen h-screen bg-[#fff] text-[#131313]">
      <Calender />
      <Date />
    </main>
  );
}
