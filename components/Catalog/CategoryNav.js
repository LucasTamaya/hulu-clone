import React from "react";

function CategoryNav() {
  return (
    <nav>
      <ul className="flex justify-between items-center gap-x-8 px-2 overflow-scroll xl:overflow-hidden">
        <li
          className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("0")}
        >
          Trending
        </li>
        <li
          className="text-white cursor-pointer transition ease-out whitespace-nowrap hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("1")}
        >
          Top Rated
        </li>
        <li
          className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("2")}
        >
          Action
        </li>
        <li
          className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("3")}
        >
          Comedy
        </li>
        <li
          className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("4")}
        >
          Horror
        </li>
        <li
          className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("5")}
        >
          Romance
        </li>
        <li
          className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("6")}
        >
          Mystery
        </li>
        <li
          className="text-white cursor-pointer transition ease-out whitespace-nowrap hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("7")}
        >
          Sci-fi
        </li>
        <li
          className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("8")}
        >
          Western
        </li>
        <li
          className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("9")}
        >
          Animation
        </li>
        <li
          className="text-white cursor-pointer transition ease-out whitespace-nowrap hover:scale-[1.15] hover:text-[#00ed82]"
          onClick={() => setCategoryIndex("10")}
        >
          TV Movie
        </li>
      </ul>
    </nav>
  );
}

export default CategoryNav;
