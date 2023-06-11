import React from "react";
import style from './HeadersLink.module.scss';

function HeadersLink() {
  return (
    <div>
      <a href="/" className={style.links}>
       Taller
      </a>
      <a href="/select" className={style.links}>
        Realizar pedido
      </a>
      <a href="/products" className={style.links}>
        Productos
      </a>
      <a href="/contact" className={style.links}>
        Contacto
      </a>
    </div>
  );
}

export default HeadersLink;
