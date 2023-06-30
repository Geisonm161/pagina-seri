import background from "../../SASS/ZoomBackground.module.scss";
import Image from "../../assets/logo_Mesa de trabajo 1.png";
import React, { useState } from "react";
import stylesGlobal from "../../SASS/StylesGlobal.module.scss";
import style from "./MainView.module.scss";
import { Icons } from "../../Componets/Icons/Icons";
import DropdownTop from "../../Componets/DropdownTop/DropdownTop";
import HeadersLink from "../../Componets/HeadersLink/HeadersLink";
import { useNavigate } from "react-router-dom";
import Button from "../../Componets/Button/Button";
import MessageSent from "../../Componets/MessageSent/MessageSent";
import {
  setItem,
  getItem,
} from "../../services/servicesLocalStorage/servicesLocalStorage";
import Landing from "../Landing/Landing";

function MainView() {
  const navigation = useNavigate();
  const datosStorage = getItem(process.env.REACT_APP_NAME_ARTICLE) || [];
  const extractObject = datosStorage.handleContentInfoInput;

  const [changeIcons, setChangeIcons] = useState();
  const [messageDetailed, setMessageDetailed] = useState(
    extractObject ? [extractObject] : []
  );

  const handleIconsVariation = () => {
    setChangeIcons(!changeIcons);
  };
  
  const handleNavigationMainView = () => navigation("/");
  
  const handleChangeRoute = () => navigation("/taller");
  
  return (
    <div className={stylesGlobal.containerMain}>
      <Landing/>
      <div className={background.backgroundMain} />
      <DropdownTop changeIcons={changeIcons} />
      <div className={style.containerTop}>
        <div className={stylesGlobal.containerImage}>
          <img
            className={stylesGlobal.image}
            onClick={handleNavigationMainView}
            src={Image}
            alt="logo"
          />
        </div>

        <header className={stylesGlobal.viewsPages}>
          <HeadersLink />

          <Icons
            handleIconsVariation={handleIconsVariation}
            changeIcons={changeIcons}
          />
        </header>
      </div>
      <div className={style.subContainer}>
        <div className={style.containerh1}>
          <h1 className={style.h1Main}>¿Qué hacemos?</h1>
          <p className={style.parrafoMain}>
            Somos especialistas en marcaje textil, serigrafía, sublimacion,
            bordado, DTF y mas...
          </p>

          <Button
            nameButton="saber más"
            styleButton="Saber más"
            onClick={handleChangeRoute}
          />
        </div>
        <div
          className={
            messageDetailed || datosStorage
              ? style.containerEmail
              : style.containerNoneDisplay
          }
        >
          {messageDetailed.map((cluster1, index) => (
            <MessageSent
              key={index}
              article={datosStorage.Article || cluster1.Article}
              fabric={cluster1.label ? cluster1.label : "Vacio"}
              color={cluster1.Color ? cluster1.Color : "Vacio"}
              amount={cluster1.Amount ? cluster1.Amount : "Vacio"}
              information={
                cluster1.Information ? cluster1.Information : "Vacio"
              }
              imageFront={
                datosStorage.ImageFront ? datosStorage.ImageFront : "Vacio"
              }
              imageBack={
                datosStorage.ImageBack ? datosStorage.ImageBack : "Vacio"
              }
              imageAdditional={
                datosStorage.ImageAdditional
                  ? datosStorage.ImageAdditional
                  : "Vacio"
              }
              imageAdditional2={
                datosStorage.ImageAdditional2
                  ? datosStorage.ImageAdditional2
                  : "Vacio"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainView;
