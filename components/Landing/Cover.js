import React from "react";

function Cover({ details, category, bgSrc }) {
  return (
    <div
      className="w-full max-w-[294px] h-[450px] relative bg-cover cursor-pointer mx-auto"
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-start p-7 bg-black/30">
        <h4 className="text-white text-xl z-10">{details}</h4>
        <h3 className="text-white text-2xl z-10 font-bold">{category}</h3>
      </div>
    </div>
  );
}

export default Cover;
