import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieCard from "./MovieCard";

function MovieList() {
  const [parameter, setParameter] = useState("trending/all/week");
  const [filmsList, setFilmsList] = useState([]);

  const MDB_IMG_URL = "https://image.tmdb.org/t/p/original";

  const firstLoad = async () => {
    const res = await axios.get(`http://localhost:3000/api/getAllFilms`, {
      params: parameter,
    });

    console.log(res);

    setFilmsList(res.data.films);
  };

  useEffect(() => {
    firstLoad();
  });

  return (
    <div>
      <h1>This is movie list</h1>

      {filmsList.map((x) => (
        <MovieCard
          key={x.id}
          imgSrc={`${MDB_IMG_URL}${x.poster_path}`}
          overview={x.overview}
          title={x.title}
        />
      ))}
    </div>
  );
}

export default MovieList;
