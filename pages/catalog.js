import React from "react";
import Image from "next/image";
import axios from "axios";

import huluLogo from "../public/src/images/logo.png";
import MainNav from "../components/Catalog/MainNav";
import CategoryNav from "../components/Catalog/CategoryNav";
import MovieList from "../components/Catalog/MovieList";
import movieRequests from "../utils/movieRequests";

function catalog({ data }) {
  return (
    <div className="bg-[#151516] p-5">
      <header className="flex flex-col justify-center items-center gap-y-10 mb-10 sm:flex-row sm:justify-between">
        <MainNav />
        <Image src={huluLogo} width={90} height={30} alt="Hulu official logo" />
      </header>

      <main>
        <CategoryNav />
        <MovieList data={data} />
      </main>
    </div>
  );
}

export default catalog;

export async function getServerSideProps(context) {
  // get the film genre in the url parameter
  const genre = context.query.genre;

  let searchUrl;
  let data;

  // get the corresponding url api
  Object.entries(movieRequests).map(([key, { title, url }]) => {
    if (title === genre) {
      console.log(url);
      searchUrl = url;
    }
  });

  // get data from MDB api
  try {
    const res = await axios.get(searchUrl);
    data = res.data.results;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      data,
    },
  };
}
