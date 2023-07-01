import ClockLoader from "react-spinners/ClockLoader";
import style from "./Landing.module.scss";

function Landing() {

  return (
    <div
      className={ style.containerLanding }
    >
      <ClockLoader
        color={"rgb(43, 255, 0)"}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Landing;
