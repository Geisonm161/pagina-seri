import React from "react";
import style from "./NetworksLink.module.scss";

function NetworksLink({ image, href, content }) {
  return (
    <div className={style.containerMain}>
      <img src={image} className={style.image} alt="icono" />
      <a href={href} target="_blanck">
        {content}
      </a>
    </div>
  );
}

export default NetworksLink;
