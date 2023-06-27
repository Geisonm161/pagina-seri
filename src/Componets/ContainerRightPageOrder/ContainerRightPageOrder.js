import React from "react";
import ImageAngel from "../../assets/ojo de angel.jpg";
import ImageDriFit from "../../assets/tela dri fit.jpg";
import ImageAlgodon from "../../assets/tela algodon.webp";
import ImageMicroDurazno from "../../assets/tela microdurazno.jpg";
import { Paragraphs } from "../../Componets/Paragraphs/Paragraphs";
import style from "./ContainerRightPageOrder.module.scss";

function ContainerRightPageOrder({ handleContentInfoSelect }) {
  return (
    <div className={style.containerMain}>
      <p className={style.headerRight}>Tela {handleContentInfoSelect.label}</p>
      {handleContentInfoSelect.label === "Ojo de angel" && (
        <>
          <img src={ImageAngel} alt="preview" className={style.image} />
          <p className={style.infoTela}>{Paragraphs.fabricOjODeAngel}</p>
        </>
      )}
      {handleContentInfoSelect.label === "Dry Fit" && (
        <>
          <img src={ImageDriFit} alt="preview" className={style.image} />
          <p className={style.infoTela}>{Paragraphs.fabricDryFit}</p>
        </>
      )}
      {handleContentInfoSelect.label === "Algodon" && (
        <>
          <img src={ImageAlgodon} alt="preview" className={style.image} />
          <p className={style.infoTela}>{Paragraphs.fabricAlgodon}</p>
        </>
      )}
      {handleContentInfoSelect.label === "Micro durazno" && (
        <>
          <img src={ImageMicroDurazno} alt="preview" className={style.image} />
          <p className={style.infoTela}>{Paragraphs.fabricMicroDurazno}</p>
        </>
      )}
    </div>
  );
}

export default ContainerRightPageOrder;
