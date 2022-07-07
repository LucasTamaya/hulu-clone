import React, { useState } from "react";
import Image from "next/image";

import huluLogo from "../public/src/images/logo.png";
import MainNav from "../components/Catalog/MainNav";
import CategoryNav from "../components/Catalog/CategoryNav";
import MovieList from "../components/Catalog/MovieList";

function catalog() {
  const [categoryIndex, setCategoryIndex] = useState("0");

  return (
    <div className="bg-[#151516] p-5">
      <header className="flex flex-col justify-center items-center gap-y-10 mb-10 sm:flex-row sm:justify-between">
        <MainNav />
        <Image src={huluLogo} width={90} height={30} alt="Hulu official logo" />
      </header>

      <main>
        <CategoryNav />
        <MovieList categoryIndex={categoryIndex} />
      </main>
    </div>
  );
}

export default catalog;
