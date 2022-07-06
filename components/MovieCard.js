import React from "react";
import Image from "next/image";

function MovieCard({ imgSrc, overview, title }) {
  return (
    <div>
      <Image src={imgSrc} alt="Movie image" width={300} height={400} />

      <p>{overview}</p>

      <h2>{title}</h2>
    </div>
  );
}

export default MovieCard;
