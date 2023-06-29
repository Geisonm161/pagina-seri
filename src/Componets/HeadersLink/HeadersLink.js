import React from "react";
import style from "./HeadersLink.module.scss";

function HeadersLink() {
  return (
    <div>
      <a href="/Taller" className={style.links}>
        Taller
      </a>
      <a href="/select" className={style.links}>
        Realizar pedido
      </a>
      <a href="/products" className={style.links}>
        Galeria
      </a>
      <a href="/contact" className={style.links}>
        Redes y Ubicación
      </a>
    </div>
  );
}

export default HeadersLink;
