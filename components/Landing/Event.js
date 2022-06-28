import React, { useState } from "react";
import Image from "next/image";

import liveSportsLogo1 from "../../public/src/images/live-sports-logo-1.png";
import liveSportsLogo2 from "../../public/src/images/live-sports-logo-2.png";
import liveSportsLogo3 from "../../public/src/images/live-sports-logo-3.svg";
import liveSportsLogo4 from "../../public/src/images/live-sports-logo-4.png";

function Event({ eventData }) {
  const [index, setIndex] = useState(0);

  return (
    <div
      className="w-full h-[800px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${eventData[index].bgUrl})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center pt-8 gap-y-6 sm:justify-center lg:items-start lg:pl-[320px] bg-black/30">
        <nav>
          <ul className="flex items-center gap-x-6">
            <li
              className="relative text-white text-xs uppercase font-bold cursor-pointer after:absolute after:top-8 after:left-0 after:content-[''] after:w-full after:h-[5px] after:bg-white"
              onClick={() => setIndex(0)}
            >
              Live sports
            </li>
            <li
              className="text-[#cccccc] text-xs uppercase font-bold cursor-pointer"
              onClick={() => setIndex(1)}
            >
              Breaking news
            </li>
            <li
              className="text-[#cccccc] text-xs uppercase font-bold cursor-pointer"
              onClick={() => setIndex(2)}
            >
              Biggest events
            </li>
          </ul>
        </nav>

        <h2 className="text-white text-4xl sm:text-5xl font-bold mt-10">
          {eventData[index].title}
        </h2>

        <p className="text-white max-w-[420px] text-center px-5 lg:text-left lg:px-0">
          {eventData[index].description}
        </p>
        <div className="flex items-center gap-x-6">
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <Image
              src={liveSportsLogo1}
              width={70}
              height={40}
              alt="live sport logo"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <Image
              src={liveSportsLogo2}
              width={70}
              height={40}
              alt="live sport logo"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <Image
              src={liveSportsLogo3}
              width={70}
              height={40}
              alt="live sport logo"
            />
          </div>
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center">
            <Image
              src={liveSportsLogo4}
              width={70}
              height={40}
              alt="live sport logo"
            />
          </div>
        </div>
        <p className="text-[#cccccc] text-xs text-center px-5 lg:text-left lg:px-0">
          Live TV plan required. Regional restrictions, blackouts and additional
          terms apply.{" "}
          <span className="underline cursor-pointer">See details</span>
        </p>
      </div>
    </div>
  );
}

export default Event;
