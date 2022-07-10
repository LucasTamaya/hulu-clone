import React, { useState } from "react";
import DoneIcon from "@mui/icons-material/Done";

function ConnexionSuccess({ message }) {
  const [hideMessage, setHideMessage] = useState(false);

  return (
    <div
      className={`fixed bottom-[35px] md:top-[50px] w-fit flex items-center gap-x-2 bg-green-500 p-3 rounded transition ease animate-authTransitionInSm md:animate-authTransitionInMd ${
        hideMessage && "opacity-0"
      }`}
    >
      <p className="text-white">{message}</p>
      <DoneIcon
        className="text-white cursor-pointer"
        sx={{ fontSize: 20 }}
        onClick={() => setHideMessage(true)}
      />
    </div>
  );
}

export default ConnexionSuccess;
