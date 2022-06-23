import React from "react";

function LandingCover({ details, category, title, bgSrc }) {
  return (
    <div className="w-full max-w-[294px] h-[450px] flex flex-col justify-between bg-red-500 p-7">
      <div>
        <h4 className="text-white text-xl">{details}</h4>
        <h3 className="text-white text-2xl font-bold">{category}</h3>
      </div>
      <h5 className="text-[#cccccc] text-sm font-bold uppercase">{title}</h5>
    </div>
  );
}

export default LandingCover;
