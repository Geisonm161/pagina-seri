import React, { useEffect, useState } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import style from "./Landing.module.scss";

function Landing() {
  const [accessLanding, setAccessLanding] = useState(true);
  const [deleteContainer, setDeleteContainer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAccessLanding(false);
      setTimeout(() => {
        setDeleteContainer(true);
      }, 4000);
    }, 4500);
  });
  return (
    <div
      className={` ${
        accessLanding ? style.containerLanding : style.containerMove
      } ${deleteContainer && style.deleteContainer}`}
    >
      <PacmanLoader
        color={"rgb(43, 255, 0)"}
        loading={true}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Landing;
