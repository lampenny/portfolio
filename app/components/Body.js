"use client";

import content from "../../public/data";
import TechStack from "./Techstack";

export default function Body() {
  return (
    <>
      <div className="bg-white bg-opacity-40 rounded-xl p-10 md:max-w-3xl">
        <h1 className="text-4xl">{content.data[0].intro}</h1>
        <h3 className="text-2xl">{content.data[0].info}</h3>
        <h3 className="text-2xl">{content.data[0].info_one}</h3>
        <div className="flex flex-col gap-y-5 pt-6">
          <TechStack />
          <div className="text-xl text-black">{content.data[0].info_two}</div>
        </div>
      </div>
    </>
  );
}
