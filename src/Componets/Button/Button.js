import React from "react";
import style from "./Button.module.scss";

function Button({ onClick, nameButton, type, styleButton }) {
  let buttonClass = "";

  if (styleButton === "Enviar") {
    buttonClass = style.buttonEnviar;
  } else if (styleButton === "Back") {
    buttonClass = style.buttonBack;
  } else if (styleButton === "Añadir") {
    buttonClass = style.openContainerInside;
  } else if (styleButton === 'Saber más'){
    buttonClass = style.buttonSaber;
  }

  return (
    <div className={style.containerButton}>
      <button type={type} onClick={onClick} className={buttonClass}>
        {nameButton}
      </button>
    </div>
  );
}

export default Button;
