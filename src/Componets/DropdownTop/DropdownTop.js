import React from "react";
import style from "./DropdownTop.module.scss";
import { IconsInfo, IconsForm, IconsImage, IconsLocation, IconsUser } from "../Icons/Icons";

function DropdownTop({ changeIcons }) {
  return (
    <div
      className={
        changeIcons ? style.containerDropdownTrue : style.containerDropdownFalse
      }
    >
      <h2 className={style.header}><IconsInfo/>Información taller</h2>
      <h2 className={style.header}><IconsForm/>Realizar pedido</h2>
      <h2 className={style.header}><IconsImage/>Galeria</h2>
      <h2 className={style.header}><IconsLocation/>Ubicación</h2>
      <h2 className={style.header}><IconsUser/>Contacto</h2>
    </div>
  ); 
}

export default DropdownTop;
