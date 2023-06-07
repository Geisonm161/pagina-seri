import React from "react";
import style from './HeadersLink.module.scss';

function HeadersLink() {
  return (
    <div>
      <a href="/" className={style.links}>
        Información taller
      </a>
      <a href="/select" className={style.links}>
        Realizar pedido
      </a>
      <a href="/" className={style.links}>
        Trabajos realizados
      </a>
      <a href="/" className={style.links}>
        Ubicación
      </a>
      <a href="/" className={style.links}>
        Contacto
      </a>
    </div>
  );
}

export default HeadersLink;
