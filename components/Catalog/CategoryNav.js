import React from "react";
import { useRouter } from "next/router";

import movieRequests from "../../utils/movieRequests";

function CategoryNav() {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex justify-between items-center gap-x-8 px-2 overflow-x-scroll xl:overflow-x-hidden scrollbar-hide">
        {Object.entries(movieRequests).map(([key, { title, url }]) => (
          <li
            key={key}
            className="text-white cursor-pointer transition ease-out hover:scale-[1.15] hover:text-[#00ed82]"
            onClick={() => router.push(`?genre=${title}`)}
          >
            {title}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CategoryNav;
