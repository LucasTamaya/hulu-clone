import Link from "next/link";
import Image from "next/image";

import huluLogos from "../public/src/images/logos.png";
import huluLogo from "../public/src/images/logo.png";
import cover1 from "../public/src/images/cover-1.jpg";
import cover2 from "../public/src/images/cover-2.jpg";
import cover3 from "../public/src/images/cover-3.jpg";
import cover4 from "../public/src/images/cover-4.jpg";
import LandingCover from "../components/LandingCover";

export default function Home() {
  return (
    <>
      <header>
        <div className="bg-[url('/src/images/header.jpg')] bg-cover flex justify-center py-[100px]">
          <div className="flex flex-col items-center gap-y-6">
            <h3 className="text-[#00ed82] uppercase font-bold">
              Bundle with any hulu plan & save
            </h3>
            <Image src={huluLogos} width={600} height={150} />
            <h2 className="text-white font-bold text-2xl text-center max-w-[670px]">
              Get endless entertainement, live sports, and the shows and movies
              you love.
            </h2>
            <button className="text-[#333333] font-bold bg-[#00ed82] w-full px-8 py-3 uppercase rounded">
              Get the disney bundle
            </button>
            <p className="text-white/50 text-xs">
              <span className="underline cursor-pointer">What's included?</span>{" "}
              See{" "}
              <span className="underline cursor-pointer">Bundle terms.</span>
            </p>
            <p className="text-white underline cursor-pointer">
              Sign up for Hulu only
            </p>
            <div className="absolute top-5 left-5">
              <Image src={huluLogo} width={60} height={20} />
            </div>
            <Link href="/login">
              <p className="text-white uppercase absolute top-5 right-5 cursor-pointer">
                Log in
              </p>
            </Link>
          </div>
        </div>
      </header>

      <main className="bg-[#151516] pt-[100px]">
        <div className="flex flex-col items-center gap-y-5">
          <h3 className="text-[#00ed82] uppercase font-bold">
            Included in all plans
          </h3>

          <h2 className="text-white font-bold text-5xl">All The TV You Love</h2>

          <p className="text-white text-xl text-center max-w-[860px] mb-12">
            Stream full seasons of exclusive series, current-season episodes,
            hit movies, Hulu Originals, kids shows, and more.
          </p>
        </div>

        <div className="flex justify-center">
          <LandingCover
            details="Past & Current Seasons"
            category="TV Shows"
            title="Bob's burgers"
            bgSrc={cover1}
          />
        </div>
      </main>

      <footer></footer>
    </>
  );
}
