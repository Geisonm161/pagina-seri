import React, { useState } from "react";
import style from "./ContactView.module.scss";
import Image from "../../assets/logo_Mesa de trabajo 1.png";
import stylesGlobal from "../../SASS/StylesGlobal.module.scss";
import { Icons } from "../../Componets/Icons/Icons";
import DropdownTop from "../../Componets/DropdownTop/DropdownTop";
import HeadersLink from "../../Componets/HeadersLink/HeadersLink";
import Link from "../../Componets/ContactsLink/ContanctsLink";
import Icono from "../../assets/iconos-01.png";
import Icono2 from "../../assets/iconos-02.png";
import Icono3 from "../../assets/iconos-03.png";
import Icono4 from "../../assets/iconos-04.png";


function ContactView() {
  const [changeIcons, setChangeIcons] = useState();

  const handleIconsVariation = () => {
    setChangeIcons(!changeIcons);
  };

  return (
    <div className={style.containerMain}>
      <DropdownTop changeIcons={changeIcons} />
      <div className={style.containerTop}>
        <div className={stylesGlobal.containerImage}>
          <img className={stylesGlobal.image} src={Image} alt="logo" />
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
        <div className={style.containerSub}>
          <img className={style.image} src={Image} alt="logo" />
          <Link
            image={Icono}
            href={"https://api.whatsapp.com/send?phone=8498600600"}
            content="(849) 860-0600"
          />
          <Link
            image={Icono3}
            href={"https://maps.app.goo.gl/HHh5N7nK4pYgFxrMA"}
            content="UBICACION"
          />
          <Link
            image={Icono4}
            href={"mailto:geisonm161@gmail.com"}
            content="geisonm161@gmail.com"
          />
          <Link
            image={Icono2}
            href={"https://www.instagram.com/yei_serigrafia/?hl=es-la"}
            content="INSTAGRAM"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactView;
