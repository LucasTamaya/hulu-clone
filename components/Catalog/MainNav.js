import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

function MainNav() {
  return (
    <nav className="sm:flex-1 max-w-[450px]">
      <ul className="flex items-center gap-x-3 sm:justify-between">
        <li className="text-white cursor-pointer relative group">
          <HomeOutlinedIcon className="hover:animate-bounce peer" />
          <p className="absolute left-[50%] translate-x-[-50%] opacity-0 peer-hover:opacity-100">
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
  );
}

export default MainNav;
