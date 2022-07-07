import React, { useState, useEffect } from "react";
import axios from "axios";
import FlipMove from "react-flip-move";

import MovieCard from "./MovieCard";

function MovieList({ categoryIndex }) {
  const [filmsList, setFilmsList] = useState([]);

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
    <FlipMove className="mt-10 mx-auto grid grid-cols-1 gap-5 justify-center px-2 sm:grid-cols-2 lg:grid-cols-3">
      {filmsList.map((x) => (
        <MovieCard key={x.id} data={x} />
      ))}
    </FlipMove>
  );
}

export default MovieList;
