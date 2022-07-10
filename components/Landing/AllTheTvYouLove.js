import React from "react";

import Cover from "../../components/Landing/Cover";

function AllTheTvYouLove() {
  return (
    <>
      <div className="flex flex-col items-center gap-y-5 px-5">
        <h3 className="text-[#00ed82] text-sm uppercase font-bold sm:text-base">
          Included in all plans
        </h3>

        <h2 className="text-white text-center font-bold text-3xl sm:text-5xl">
          All The TV You Love
        </h2>

        <p className="text-white sm:text-lg text-center max-w-[860px] mb-12">
          Stream full seasons of exclusive series, current-season episodes, hit
          movies, Hulu Originals, kids shows, and more.
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
    </>
  );
}

export default AllTheTvYouLove;
