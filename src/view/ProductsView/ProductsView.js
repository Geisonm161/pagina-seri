import React, { useState } from "react";
import Hoodie1 from "../../assets/Familia tania-01.png";
import Hoodie2 from "../../assets/Familia tania-02.png";
import Hoodie3 from "../../assets/Familia tania-03.png";
import Hoodie4 from "../../assets/Familia tania-04.png";
import Hoodie5 from "../../assets/Familia tania-05.png";
import Hoodie6 from "../../assets/Familia tania-06.png";
import Tshirt1 from "../../assets/yerineisy cumpleaños.jpg";
import Tshirt2 from "../../assets/salon arte suegra.jpg";
import Tshirt3 from "../../assets/salon amiga suegra.jpg";
import Tshirt4 from "../../assets/arte cupido.jpg";
import Tshirt5 from "../../assets/arte mb marcos.jpg";
import Tshirt6 from "../../assets/arte mio y mia.jpg";
import Tshirt7 from "../../assets/arte.jpg";
import Realizados1 from "../../assets/michale toque de queda.jpg";
import Realizados2 from "../../assets/arte chef.jpg";
import Realizados3 from "../../assets/baseball 1.jpg";
import Realizados4 from "../../assets/baseball 2.jpg";
import Realizados5 from "../../assets/baseball3.jpg";
import Realizados6 from "../../assets/cintas.jpg";
import Realizados7 from "../../assets/colegio monchy.jpg";
import Realizados8 from "../../assets/coro km 25.jpg";
import Realizados9 from "../../assets/cumpleaños.jpg";
import Realizados10 from "../../assets/de carlos rip.jpg";
import Realizados11 from "../../assets/de niño 25.jpg";
import Realizados12 from "../../assets/de pareja espalda.jpg";
import Realizados13 from "../../assets/de pareja frente.jpg";
import Realizados14 from "../../assets/delantal chef.jpg";
import Realizados15 from "../../assets/familia redman.jpg";
import Realizados16 from "../../assets/farmacia.jpg";
import Realizados17 from "../../assets/ftu iglesia.jpg";
import Realizados18 from "../../assets/gorra baseball 1.jpg";
import Realizados19 from "../../assets/gorra baseball 2.jpg";
import Realizados20 from "../../assets/help iglesia.jpg";
import Realizados21 from "../../assets/la pulga.jpg";
import Realizados22 from "../../assets/liga de baseball primero.jpg";
import Realizados23 from "../../assets/love igleisa.jpg";
import Realizados24 from "../../assets/love iglesia 2.jpg";
import Realizados25 from "../../assets/michale toque de queda.jpg";
import Realizados26 from "../../assets/nacidos para el altar frente.jpg";
import Realizados27 from "../../assets/nacidos para el altar.jpg";

import Image from "../../assets/logo_Mesa de trabajo 1.png";
import stylesGlobal from "../../SASS/StylesGlobal.module.scss";
import style from "./ProductsView.module.scss";
import { Icons } from "../../Componets/Icons/Icons";
import DropdownTop from "../../Componets/DropdownTop/DropdownTop";
import HeadersLink from "../../Componets/HeadersLink/HeadersLink";
import { useNavigate } from "react-router-dom";

function ProductosView() {
  const navigation = useNavigate();
  const [changeIcons, setChangeIcons] = useState();

  const handleIconsVariation = () => {
    setChangeIcons(!changeIcons);
  };

  const handleNavigationMainView = () => navigation("/");

  return (
    <div className={style.containerMain}>
      <DropdownTop changeIcons={changeIcons} />
      <div className={stylesGlobal.containerTop}>
        <div className={stylesGlobal.containerImage}>
          <img
            className={stylesGlobal.image}
            src={Image}
            alt="logo"
            onClick={handleNavigationMainView}
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
        <h1>T-shirt</h1>
        <hr />
        <img src={Tshirt1} alt="Hoddie1" className={style.image} />
        <img src={Tshirt2} alt="Hoddie1" className={style.image} />
        <img src={Tshirt3} alt="Hoddie1" className={style.image} />
        <img src={Tshirt4} alt="Hoddie1" className={style.image} />
        <img src={Tshirt5} alt="Hoddie1" className={style.image} />
        <img src={Tshirt6} alt="Hoddie1" className={style.image} />
        <img src={Tshirt7} alt="Hoddie1" className={style.image} />
        <h1>Hoodies</h1>
        <hr />
        <img src={Hoodie2} alt="Hoddie2" className={style.image} />
        <img src={Hoodie3} alt="Hoddie3" className={style.image} />
        <img src={Hoodie4} alt="Hoddie4" className={style.hoodie4} />
        <img src={Hoodie5} alt="Hoddie5" className={style.image} />
        <img src={Hoodie6} alt="Hoddie6" className={style.image} />
        <img src={Hoodie1} alt="Hoddie1" className={style.image} />
        <h1>Hoodies</h1>
        <hr />
        <img src={Realizados1} alt="Hoddie2" className={style.image4} />
        <img src={Realizados2} alt="Hoddie3" className={style.image4} />
        <img src={Realizados3} alt="Hoddie4" className={style.image4} />
        <img src={Realizados4} alt="Hoddie5" className={style.image4} />
        <img src={Realizados5} alt="Hoddie6" className={style.image4} />
        <img src={Realizados6} alt="Hoddie1" className={style.image4} />
        <img src={Realizados7} alt="Hoddie1" className={style.image4} />4
        <img src={Realizados8} alt="Hoddie1" className={style.image4} />
        <img src={Realizados9} alt="Hoddie1" className={style.image4} />
        <img src={Realizados10} alt="Hoddie1" className={style.image4} />
        <img src={Realizados11} alt="Hoddie1" className={style.image4} />
        <img src={Realizados12} alt="Hoddie1" className={style.image4} />
        <img src={Realizados13} alt="Hoddie1" className={style.image4} />
        <img src={Realizados14} alt="Hoddie1" className={style.image4} />
        <img src={Realizados15} alt="Hoddie1" className={style.image4} />
        <img src={Realizados16} alt="Hoddie1" className={style.image4} />
        <img src={Realizados17} alt="Hoddie1" className={style.image4} />
        <img src={Realizados18} alt="Hoddie1" className={style.image4} />
        <img src={Realizados19} alt="Hoddie1" className={style.image4} />
        <img src={Realizados20} alt="Hoddie1" className={style.image4} />
        <img src={Realizados21} alt="Hoddie1" className={style.image4} />
        <img src={Realizados22} alt="Hoddie1" className={style.image4} />
        <img src={Realizados23} alt="Hoddie1" className={style.image4} />
        <img src={Realizados24} alt="Hoddie1" className={style.image4} />
        <img src={Realizados25} alt="Hoddie1" className={style.image4} />
        <img src={Realizados26} alt="Hoddie1" className={style.image4} />
        <img src={Realizados27} alt="Hoddie1" className={style.image4} />
      </div>
    </div>
  );
}

export default ProductosView;
