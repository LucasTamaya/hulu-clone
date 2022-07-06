import React from "react";
import Image from "next/image";

function MovieCard({ imgSrc, overview, title }) {
  return (
    <div className="mx-auto cursor-pointer sm:mx-0">
      <Image src={imgSrc} alt="Movie image" width={500} height={294} />

      <p className="text-white text-sm max-w-[500px] h-[20px] overflow-hidden truncate">
        {overview}
      </p>

      <h2 className="text-white font-bold tracking-widest">{title}</h2>
    </div>
  );
}

export default MovieCard;
