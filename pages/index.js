import React, { useState } from "react";

import { useMediaQuery } from "react-responsive";

import Header from "../components/Landing/Header";
import Event from "../components/Landing/Event";
import ConnexionPopUp from "../components/Landing/ConnexionPopUp";
import {
  landingEventsMobile,
  landingEventsLaptop,
} from "../utils/landingEvents";
import AllTheTvYouLove from "../components/Landing/AllTheTvYouLove";
import LiveTvMakeItBetter from "../components/Landing/LiveTvMakeItBetter";

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

      <Header setShowConnexionPopUp={setShowConnexionPopUp} />

      <main className="bg-[#151516] pt-[50px] sm-pt[100px]">
        <AllTheTvYouLove />
        <LiveTvMakeItBetter />
        {isLargeScreen && <Event eventData={landingEventsLaptop} />}
        {isSmallScreen && <Event eventData={landingEventsMobile} />}
      </main>

      <footer></footer>
    </>
  );
}
