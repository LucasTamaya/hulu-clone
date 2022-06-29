import Image from "next/image";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useMediaQuery } from "react-responsive";

import huluLogos from "../public/src/images/logos.png";
import huluLogo from "../public/src/images/logo.png";
import Cover from "../components/Landing/Cover";
import Event from "../components/Landing/Event";
import ConnexionPopUp from "../components/Landing/ConnexionPopUp";
import {
  landingEventsMobile,
  landingEventsLaptop,
} from "../utils/landingEvents";

export default function Home() {
  // detect large screen
  const isLargeScreen = useMediaQuery({
    query: "(min-width: 640px)",
  });

  // detect small screen
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 640px)",
  });

  const [showConnexionPopUp, setShowConnexionPopUp] = useState(false);

  return (
    <>
      {showConnexionPopUp && (
        <ConnexionPopUp setShowConnexionPopUp={setShowConnexionPopUp} />
      )}

      <header>
        <div className="bg-[url('/src/images/header.jpg')] bg-cover h-screen flex justify-center items-center px-[40px] py-[100px]">
          <div className="flex flex-col items-center gap-y-6">
            <h3 className="text-[#00ed82] text-sm uppercase font-bold sm:text-base">
              Bundle with any hulu plan & save
            </h3>
            <Image
              src={huluLogos}
              width={600}
              height={150}
              alt="hulu disney and espn logo"
            />
            <h2 className="text-white font-bold text-lg sm:text-2xl text-center max-w-[670px]">
              Get endless entertainement, live sports, and the shows and movies
              you love.
            </h2>
            <button className="text-[#333333] font-bold bg-[#00ed82] w-full px-8 py-3 uppercase rounded">
              Get the disney bundle
            </button>
            <div className="flex flex-col items-center gap-y-2">
              <p className="text-white/50 text-xs">
                <span className="underline cursor-pointer">
                  What&apos;s included?
                </span>{" "}
                See{" "}
                <span className="underline cursor-pointer">Bundle terms.</span>
              </p>
              <p className="text-white underline cursor-pointer">
                Sign up for Hulu only
              </p>
            </div>
            <div className="absolute top-5 left-5">
              <Image src={huluLogo} width={60} height={20} />
            </div>
            <p
              className="text-white uppercase absolute top-5 right-5 cursor-pointer"
              onClick={() => setShowConnexionPopUp(true)}
            >
              Log in
            </p>
          </div>
        </div>
      </header>

      <main className="bg-[#151516] pt-[50px] sm-pt[100px]">
        <div className="flex flex-col items-center gap-y-5 px-5">
          <h3 className="text-[#00ed82] text-sm uppercase font-bold sm:text-base">
            Included in all plans
          </h3>

          <h2 className="text-white font-bold text-3xl sm:text-5xl">
            All The TV You Love
          </h2>

          <p className="text-white sm:text-lg text-center max-w-[860px] mb-12">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>

        <div className="flex justify-center pb-[80px] sm:pb-[150px] px-5">
          <div className="w-full mx-auto gap-x-5 gap-y-5 grid grid-cols-1 sm:grid-cols-2 sm:max-w-[610px] xl:grid-cols-4 xl:max-w-[1300px]">
            <Cover
              details="Past & Current Seasons"
              category="TV Shows"
              bgSrc="/src/images/cover-1.jpg"
            />
            <Cover
              details="New & Classic"
              category="Movies"
              bgSrc="/src/images/cover-2.jpg"
            />
            <Cover
              details="Groundbreaking"
              category="Hulu Originals"
              bgSrc="/src/images/cover-3.jpg"
            />
            <Cover
              details="Add-on"
              category="Premiums"
              bgSrc="/src/images/cover-4.jpg"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-6 pb-5 sm:pb-[100px] px-5">
          <h3 className="text-[#00ed82] text-sm uppercase sm:text-base">
            Hulu + live tv, now with disney+ and espn+
          </h3>
          <h2 className="text-white text-3xl sm:text-5xl font-bold">
            Live TV Makes It Better
          </h2>
          <p className="text-white text-center sm:text-lg max-w-[730px]">
            Make the switch from cable. Get 75+ top channels on Hulu with your
            favorite live sports, news, and events - plus the entire Hulu
            streaming library. With Unlimited DVR, store Live TV recordings for
            up to nine months and fast-forward through your DVR content. Access
            endless entertainment with Disney+ and live sports with ESPN+. All
            three for a new price of $69.99/month.
          </p>
          <div>
            <p className="text-[#cccccc] text-xs text-center">
              18+ only. Regional restrictions, blackouts and{" "}
              <span className="underline">Live TV terms apply</span>. Access
              content from each service separately and access ESPN+ content via
              Hulu.
            </p>
            <p className="text-[#cccccc] text-xs text-center">
              Location data required to watch certain content. Offer valid for
              eligible subscribers only.
            </p>
            <p className="text-[#cccccc] text-xs text-center">
              Unlimited DVR recording is not available for on-demand shows.
            </p>
          </div>
          <div className="flex items-center cursor-pointer gap-x-2">
            <p className="text-white text-center uppercase font-bold mb-8">
              View channels in your area
            </p>
            <ArrowRightAltIcon className="text-white" />
          </div>
          <KeyboardArrowDownIcon className="text-white animate-bounce cursor-pointer" />
        </div>
        {/* {<Event eventData={landingEventsLaptop} />} */}
        {isLargeScreen && <Event eventData={landingEventsLaptop} />}
        {isSmallScreen && <Event eventData={landingEventsMobile} />}
      </main>

      <footer></footer>
    </>
  );
}
