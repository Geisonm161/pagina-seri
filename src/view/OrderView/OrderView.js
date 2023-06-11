import React, { useState } from "react";
import Image from "../../assets/logo_Mesa de trabajo 1.png";
import stylesGlobal from "../../SASS/StylesGlobal.module.scss";
import style from "./OrderView.module.scss";
import { Icons } from "../../Componets/Icons/Icons";
import DropdownTop from "../../Componets/DropdownTop/DropdownTop";
import HeadersLink from "../../Componets/HeadersLink/HeadersLink";
import Select from "react-select";
import background from "../../SASS/ZoomBackground.module.scss";
import Input from "../../Componets/Input/Input";
import TextArea from "../../Componets/TextArea/TextArea";
import Button from "../../Componets/Button/Button";
import { useParams } from "react-router-dom";

function OrderView() {
  const { article } = useParams();

  const [changeIcons, setChangeIcons] = useState();
  const [handleContainerInfoSelect, setHandleContainerInfoSelect] = useState({
    header: "",
    label: "",
  });
  const [handleContainerInfoInput, setHandleContainerInfoInput] = useState({
    Color: "",
    Cantidad: "",
    Informacion: "",
  });

  console.log(handleContainerInfoInput, handleContainerInfoSelect)

  const options =
    article === "Hoodie"
      ? [{ value: 1, label: "Algodon", header: "tela" }]
      : [
          { value: 1, label: "Algodon", header: "tela" },
          { value: 2, label: "Ojo de angel", header: "tela" },
          { value: 3, label: "Dri Fit", header: "tela" },
        ];

  const handleIconsVariation = () => {
    setChangeIcons(!changeIcons);
  };

  const handleInfoSelect = (value) => {
    setHandleContainerInfoSelect(value);
  };

  const handleInfoInput = (e) => {
    const { name, value } = e.target;
    setHandleContainerInfoInput({
      ...handleContainerInfoInput,
      [name]: value,
    });
  };

  const handleSendFormulary = (e) => {
    e.preventDefault();
    console.log(handleContainerInfoInput, "Select", handleContainerInfoSelect);
  };

  return (
    <div className={stylesGlobal.containerMain}>
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
      <div className={style.subContainer}>
        <div className={style.containerCentral}>
          <h1 className={style.title}>Detallar pedido ({article})</h1>

          <form onSubmit={handleSendFormulary} className={style.form}>
            {article !== "Article" && (
              <div className={style.form}>
                <div className={style.select}>
                  <h3 className={style.header}>Tipo de tela</h3>
                  <Select options={options} onChange={handleInfoSelect} />
                </div>
                <div className={style.select}>
                  <h3 className={style.header}>Color de {article}</h3>
                  <Input
                    onChange={handleInfoInput}
                    name="Color"
                    type="text"
                    placeholder="Color aqui"
                    value={handleContainerInfoSelect.Color}
                  />
                </div>
                <div className={style.select}>
                  <h3 className={style.header}>Subir imagenes</h3>
                  <Input
                    onChange={handleInfoInput}
                    name="file"
                    type="file"
                    placeholder="imagen"
                    value={handleContainerInfoSelect.Color}
                  />
                </div>
                <div className={style.select}>
                  <h3 className={style.header}>Cantidad de {article}</h3>
                  <Input
                    onChange={handleInfoInput}
                    name="Cantidad"
                    type="number"
                    placeholder="Cantidad aqui"
                    value={handleContainerInfoSelect.Cantidad}
                  />
                </div>
              </div>
            )}
            <div className={style.select}>
              <h3 className={style.header}>Informacion adicional</h3>
              <TextArea
                onChange={handleInfoInput}
                name="Informacion"
                type="text"
                placeholder="Escribir aqui"
                value={handleContainerInfoInput.Informacion}
              />
            </div>
            <div className={style.containerButton}>
              <Button
                onClick={handleSendFormulary}
                nameButton="Enviar"
                type="onSubmit"
              />
            </div>
          </form>
        </div>
      </div>
      <div className={background.zoombackground} />
    </div>
  );
}

export default OrderView;
