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

function MainView() {
  const navigation = useNavigate();

  const [changeIcons, setChangeIcons] = useState();

  const handleIconsVariation = () => {
    setChangeIcons(!changeIcons);
  };

  const handleNavigationMainView = () => navigation("/");

  const handleChangeRoute = ()=> navigation('/taller');

  return (
    <div className={stylesGlobal.containerMain}>
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
      <div className={style.containerh1}>
        <h1 className={style.h1Main}>¿Qué hacemos?</h1>
      <p className={style.parrafoMain}>
        Somos especialistas en marcaje textil, serigrafía, regalo promocional e
        impresión láser y digital.
      </p>

      <Button
      nameButton='saber más'
      styleButton='Saber más'
      onClick={handleChangeRoute}
      />
      </div>
      <div className={background.backgroundMain} />
    </div>
  );
}

export default MainView;
