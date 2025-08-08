import React from "react";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Scene } from "three";

export const Card = ({
  title = "no title",
  cardImg,
  date = "No Date",
  listItems,
  content,
}) => {
  const items = listItems.map((listItems, index) => (
    <li key={index} className="px-2 py-0.5 m-1 border-1 rounded-2xl">
      {listItems}
    </li>
  ));

  const [clicked, setClick] = useState(false);

  function handleClick() {
    setClick(!clicked);
  }

  return (
    <div className="relative flex flex-col w-full items-center max-w-3xl mx-auto">
      <button
        onClick={handleClick}
        className={`${
          clicked
            ? "w-screen max-w-3xl px-4"
            : "w-screen sm:max-w-md md:max-w-2xl px-8"
        } transition-all duration-1000 ease-in-out mx-auto`}
      >
        <div className="transition delay-50 duration-300 m-2 ease-in-out flex flex-col items-center bg-gray-50 p-5 rounded-2xl drop-shadow-xl hover:drop-shadow-2xl">
          <div className="relative">
            <img src={cardImg} className="max-w-full h-auto z-0 "></img>
            <div className="sm:hidden md:flex absolute border-2 border-red-500  flex-col bottom-1/3 left-1/2 -translate-x-1/2 items-center z-500">
              <h2 className="py-1 text-2xl font-medium">{title}</h2>
              <h3 className="">{date}</h3>
              <div className="flex flex-row p-2 text-xs">
                <ul className="flex flex-row flex-wrap justify-center">
                  {items}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
