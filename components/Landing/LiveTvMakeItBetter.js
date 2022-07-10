import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function LiveTvMakeItBetter() {
  return (
    <div className="flex flex-col items-center gap-y-6 pb-5 sm:pb-[100px] px-5">
      <h3 className="text-[#00ed82] text-sm uppercase sm:text-base">
        Hulu + live tv, now with disney+ and espn+
      </h3>
      <h2 className="text-white text-3xl text-center sm:text-5xl font-bold">
        Live TV Makes It Better
      </h2>
      <p className="text-white text-center sm:text-lg max-w-[730px]">
        Make the switch from cable. Get 75+ top channels on Hulu with your
        favorite live sports, news, and events - plus the entire Hulu streaming
        library. With Unlimited DVR, store Live TV recordings for up to nine
        months and fast-forward through your DVR content. Access endless
        entertainment with Disney+ and live sports with ESPN+. All three for a
        new price of $69.99/month.
      </p>
      <div>
        <p className="text-[#cccccc] text-xs text-center">
          18+ only. Regional restrictions, blackouts and{" "}
          <span className="underline">Live TV terms apply</span>. Access content
          from each service separately and access ESPN+ content via Hulu.
        </p>
        <p className="text-[#cccccc] text-xs text-center">
          Location data required to watch certain content. Offer valid for
          eligible subscribers only.
        </p>
        <p className="text-[#cccccc] text-xs text-center">
          Unlimited DVR recording is not available for on-demand shows.
        </p>
      </div>
      <div className="flex items-center cursor-pointer gap-x-2 mb-8">
        <p className="text-white text-center uppercase font-bold">
          View channels in your area
        </p>
        <ArrowRightAltIcon className="text-white" />
      </div>
      <KeyboardArrowDownIcon className="text-white animate-bounce cursor-pointer" />
    </div>
  );
}

export default LiveTvMakeItBetter;
