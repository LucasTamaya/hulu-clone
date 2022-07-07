import React, { forwardRef } from "react";
import Image from "next/image";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const MovieCard = forwardRef(({ data }, ref) => {
  const MDB_IMG_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div
      ref={ref}
      className="group cursor-pointer transition ease-out sm:hover:scale-[1.05]"
    >
      <Image
        src={`${MDB_IMG_URL}${data.backdrop_path}`}
        layout="responsive"
        alt="Movie image"
        width={1920}
        height={1080}
      />

      <p className="text-white text-sm max-w-[500px] h-[20px] mt-2 overflow-hidden truncate">
        {data.overview}
      </p>

      <h2 className="text-white font-bold tracking-widest">
        {data.original_title || data.original_name}
      </h2>

      <div className="flex items-center gap-x-4 opacity-0 group-hover:opacity-100">
        <p className="text-sm text-white">
          {data.release_date || data.first_air_date}
        </p>
        <div className="flex items-center gap-x-1">
          <ThumbUpOutlinedIcon className="text-white text-sm" />
          <p className="text-sm text-white">{data.vote_count}</p>
        </div>
      </div>
    </div>
  );
});

export default MovieCard;
