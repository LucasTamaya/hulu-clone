import React from "react";
import Image from "next/image";

import huluLogos from "../../public/src/images/logos.png";
import huluLogo from "../../public/src/images/logo.png";

function Header({ setShowConnexionPopUp }) {
  return (
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
            <Image
              src={huluLogo}
              width={60}
              height={20}
              alt="Hulu official logo"
            />
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
  );
}

export default Header;
