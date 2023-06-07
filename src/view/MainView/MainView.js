import React, { useState } from "react";
import Image from "../../assets/logo_Mesa de trabajo 1.png";
import stylesGlobal from "../../SASS/StylesGlobal.module.scss";
import style from "./MainView.module.scss";
import { Icons } from "../../Componets/Icons/Icons";
import DropdownTop from "../../Componets/DropdownTop/DropdownTop";
import HeadersLink from "../../Componets/HeadersLink/HeadersLink";


function MainView() {
  const [changeIcons, setChangeIcons] = useState();

  const handleIconsVariation = () => {
    setChangeIcons(!changeIcons);
  };

  return (
    <div className={style.background}>
      <div className={stylesGlobal.containerMain}>
        <DropdownTop changeIcons={changeIcons} />
        <div className={stylesGlobal.containerTop}>
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
      </div>
    </div>
  );
}

export default MainView;
