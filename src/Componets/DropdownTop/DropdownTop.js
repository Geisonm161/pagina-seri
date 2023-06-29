import React from "react";
import style from "./DropdownTop.module.scss";
import { IconsInfo, IconsForm, IconsImage, IconsUser } from "../Icons/Icons";

function DropdownTop({ changeIcons }) {
  return (
    <div
      className={
        changeIcons ? style.containerDropdownTrue : style.containerDropdownFalse
      }
    >
      <a href="/taller" className={style.header}>
        <IconsInfo />
        Taller
      </a>
      <a href="/select" className={style.header}>
        <IconsForm />
        Realizar pedido
      </a>
      <a href="/products" className={style.header}>
        <IconsImage />
        Galeria
      </a>
      <a href="/contact" className={style.header}>
        <IconsUser />
        Redes y Ubicación
      </a>
    </div>
  );
}

export default DropdownTop;
