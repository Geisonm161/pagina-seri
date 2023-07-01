import React, { useEffect, useState } from "react";
import style from "./SelectArticleView.module.scss";
import { useNavigate } from "react-router-dom";
import Button from "../../Componets/Button/Button";
import imageTshirt from "../../assets/t shirt-01.png";
import imagePolo from "../../assets/polo-01.png";
import imageSuera from "../../assets/suera-01.png";
import imageHoodie from "../../assets/hoodie-01.png";
import imageArticle from "../../assets/article-01.png";
import Background from "../../SASS/ZoomBackground.module.scss";

const SelectArticleView = ()=> {
  const navigate = useNavigate();

  const handleAccessView = (e) => {
    navigate(`/order/${e.target.alt}`);
  };

  return (
    <div className={style.containerMain}>
      <div className={Background.backgroundSelect} />

      <div className={style.containerButton}>
        <Button
          styleButton="Back"
          nameButton="←Volver"
          onClick={() => navigate("/")}
        />
      </div>
      <div className={style.subContainer}>
        <img
          src={imageTshirt}
          className={style.tshirt}
          alt="T-shirt"
          onClick={handleAccessView}
        />
        <img
          src={imageSuera}
          className={style.tshirt}
          alt="Suera"
          onClick={handleAccessView}
        />
        <img
          src={imagePolo}
          className={style.tshirt}
          alt="Polo"
          onClick={handleAccessView}
        />
        <img
          src={imageHoodie}
          className={style.tshirt}
          alt="Hoodie"
          onClick={handleAccessView}
        />
        <img
          src={imageArticle}
          className={style.tshirt}
          alt="Article"
          onClick={handleAccessView}
        />
      </div>
    </div>
  );
}

export default SelectArticleView;
