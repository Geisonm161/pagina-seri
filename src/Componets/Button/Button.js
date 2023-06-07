import React from "react";
import style from "./Button.module.scss";

function Button({ onClick, nameButton, type, access }) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={access ? style.buttonBack : style.button}
      >
        {nameButton}
      </button>
    </div>
  );
}

export default Button;
