import React from "react";
import Image from "next/image";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

import huluLogo from "../public/src/images/logo.png";
import MovieList from "../components/MovieList";

function catalog() {
  return (
    <div className="bg-[#333333] p-5">
      <header className="flex flex-col justify-center items-center gap-y-10 mb-10 sm:flex-row sm:justify-between">
        <nav className="sm:flex-1 max-w-[450px]">
          <ul className="flex items-center gap-x-3 sm:justify-between">
            <li className="text-white cursor-pointer relative group">
              <HomeOutlinedIcon className="hover:animate-bounce peer" />
              <p className="absolute left-[50%] translate-x-[-50%] hidden peer-hover:block">
                Home
              </p>
            </li>
            <li className="text-white cursor-pointer relative group">
              <BoltIcon className="hover:animate-bounce peer" />
              <p className="absolute left-[50%] translate-x-[-50%] hidden peer-hover:block">
                Trending
              </p>
            </li>
            <li className="text-white cursor-pointer relative group">
              <CheckCircleOutlineIcon className="hover:animate-bounce peer" />
              <p className="absolute left-[50%] translate-x-[-50%] hidden peer-hover:block">
                Verified
              </p>
            </li>
            <li className="text-white cursor-pointer relative group">
              <ListAltOutlinedIcon className="hover:animate-bounce peer" />
              <p className="absolute left-[50%] translate-x-[-50%] hidden peer-hover:block">
                Collections
              </p>
            </li>
            <li className="text-white cursor-pointer relative group">
              <SearchIcon className="hover:animate-bounce peer" />
              <p className="absolute left-[50%] translate-x-[-50%] hidden peer-hover:block">
                Search
              </p>
            </li>
            <li className="text-white cursor-pointer relative group">
              <PersonOutlineIcon className="hover:animate-bounce peer" />
              <p className="absolute left-[50%] translate-x-[-50%] hidden peer-hover:block">
                Account
              </p>
            </li>
          </ul>
        </nav>
        <Image src={huluLogo} width={90} height={30} alt="Hulu official logo" />
      </header>

      <main>
        <nav>
          <ul className="flex justify-between items-center gap-x-8 overflow-scroll xl:overflow-hidden">
            <li className="text-white cursor-pointer">Trending</li>
            <li className="text-white cursor-pointer whitespace-nowrap">
              Top Rated
            </li>
            <li className="text-white cursor-pointer">Action</li>
            <li className="text-white cursor-pointer">Comedy</li>
            <li className="text-white cursor-pointer">Horror</li>
            <li className="text-white cursor-pointer">Romance</li>
            <li className="text-white cursor-pointer">Mystery</li>
            <li className="text-white cursor-pointer whitespace-nowrap">
              Sci-fi
            </li>
            <li className="text-white cursor-pointer">Western</li>
            <li className="text-white cursor-pointer">Animation</li>
            <li className="text-white cursor-pointer whitespace-nowrap">
              TV Movie
            </li>
          </ul>
        </nav>

        {/* Movie list */}
        <MovieList />
      </main>
    </div>
  );
}

export default catalog;


