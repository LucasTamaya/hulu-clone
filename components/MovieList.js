import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

function MovieList({ categoryIndex }) {
  const [filmsList, setFilmsList] = useState([]);

  const MDB_IMG_URL = "https://image.tmdb.org/t/p/original";

  const getFilmsData = async () => {
    const res = await axios.get(`http://localhost:3000/api/getAllFilms`, {
      params: categoryIndex,
    });

    console.log(res);

    setFilmsList(res.data.films);
  };

  useEffect(() => {
    getFilmsData();
  }, [categoryIndex]);

  return (
    <div className="mt-10 mx-auto grid grid-cols-1 gap-5 justify-center sm:grid-cols-2 lg:grid-cols-3">
      {filmsList.map((x) => (
        <MovieCard
          key={x.id}
          imgSrc={`${MDB_IMG_URL}${x.backdrop_path}`}
          overview={x.overview}
          title={x.original_title || x.original_name}
        />
      ))}
    </div>
  );
}

export default MovieList;
