import React from "react";
import FlipMove from "react-flip-move";

import MovieCard from "./MovieCard";

function MovieList({ data }) {
  return (
    <FlipMove className="mt-10 mx-auto grid grid-cols-1 gap-5 justify-center px-2 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((x) => (
        <MovieCard key={x.id} data={x} />
      ))}
    </FlipMove>
  );
}

export default MovieList;
