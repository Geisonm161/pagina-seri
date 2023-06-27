import React, { useState } from "react";
import Image from "../../assets/logo_Mesa de trabajo 1.png";
import stylesGlobal from "../../SASS/StylesGlobal.module.scss";
import style from "./WorkshopView.module.scss";
import { Icons } from "../../Componets/Icons/Icons";
import DropdownTop from "../../Componets/DropdownTop/DropdownTop";
import HeadersLink from "../../Componets/HeadersLink/HeadersLink";
import background from "../../SASS/ZoomBackground.module.scss";
import { useNavigate } from "react-router-dom";

function WorkshopView() {

  const navigation = useNavigate();

  const [changeIcons, setChangeIcons] = useState();

  const handleIconsVariation = () => {
    setChangeIcons(!changeIcons);
  };

  const handleNavigationMainView = ()=> navigation('/');

  return (
    <div className={stylesGlobal.containerMain}>
      <DropdownTop changeIcons={changeIcons} />
      <div className={stylesGlobal.containerTop}>
        <div className={stylesGlobal.containerImage}>
          <img className={stylesGlobal.image} onClick={handleNavigationMainView} src={Image} alt="logo" />
        </div>

        <header className={stylesGlobal.viewsPages}>
          <HeadersLink />

          <Icons
            handleIconsVariation={handleIconsVariation}
            changeIcons={changeIcons}
          />
        </header>
      </div>
      <div className={style.containerCentral}>
        <div className={style.containerImage}>
          <img className={style.image} src={Image} alt="logo" />
          <p>
            ¡Descubre el Arte Impreso en Nuestro Taller: Serigrafía, Sublimación
            y DTF! <br /> <br />
            ¿Buscas dar vida a tus ideas creativas y llevarlas a otro nivel?
            ¡Estás en el lugar indicado! En nuestro taller, nos especializamos
            en técnicas de impresión de vanguardia: serigrafía, sublimación y
            DTF (Direct-to-Film). Permítenos llevarte a un viaje fascinante a
            través del mundo de la impresión y descubre por qué elegir nuestro
            taller será una experiencia inolvidable.
            <br /> <br />
            Así que, ¿estás listo para dar vida a tus ideas y dejar una
            impresión duradera en el mundo? ¡Ven a nuestro taller y descubre el
            poder del arte impreso a través de la serigrafía, la sublimación y
            el DTF! Te esperamos con los brazos abiertos y la promesa de hacer
            de tu experiencia con nosotros algo verdaderamente excepcional.
          </p>
        </div>
      </div>
      <div className={background.backgroundWorkshop} />
    </div>
  );
}

export default WorkshopView;
