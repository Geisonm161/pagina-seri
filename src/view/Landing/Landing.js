import React, { useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import style from "./Landing.module.scss";

function Landing() {
  const [accessLanding, setAccessLanding] = useState(true);
  const [deleteContainer, setDeleteContainer] = useState(false);

  setTimeout(() => {
    setAccessLanding(false);
    setTimeout(() => {
      setDeleteContainer(true);
    }, 3000);
  }, 4000);

  return (
    <div
      className={` ${
        accessLanding ? style.containerLanding : style.containerMove
      } ${deleteContainer && style.deleteContainer}`}
    >
      <PacmanLoader 
        color={'rgb(163, 163, 163)'}
        loading={true}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Landing;
