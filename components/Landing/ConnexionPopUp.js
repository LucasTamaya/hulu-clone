import React, { useState } from "react";

import Login from "./Login";
import Register from "./Register";

function ConnexionPopUp({ setShowConnexionPopUp }) {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {showLogin && (
        <Login
          setShowConnexionPopUp={setShowConnexionPopUp}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
        />
      )}
      {showRegister && (
        <Register
          setShowConnexionPopUp={setShowConnexionPopUp}
          setShowLogin={setShowLogin}
          setShowRegister={setShowRegister}
        />
      )}
    </>
  );
}

export default ConnexionPopUp;
