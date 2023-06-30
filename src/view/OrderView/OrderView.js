import { useEffect, useState } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import ContainerRightPageOrder from "../../Componets/ContainerRightPageOrder/ContainerRightPageOrder";
import ContainerUploadImages from "../../Componets/ContainerUploadImages/ContainerUploadImages";
import {
  getItem,
  setItem,
} from "../../services/servicesLocalStorage/servicesLocalStorage";
import Landing from "../Landing/Landing";

function OrderView() {
  const navigation = useNavigate();
  const { article } = useParams();

  const [handleContainerSubInside, setHandleContainerSubInside] = useState();
  const [changeIcons, setChangeIcons] = useState();
  const [handleContentInfoSelect, setHandleContentInfoSelect] = useState({
    header: "",
    label: "",
  });

  const [handleContentInfoInput, setHandleContentInfoInput] = useState({
    Article: article,
    Color: "",
    Amount: "",
    Information: "",
  });

  const options =
    article === "Hoodie"
      ? [{ value: 1, label: "Algodon", header: "fabric" }]
      : [
          { value: 0, label: "Select...", header: "" },
          { value: 1, label: "Algodon", header: "fabric" },
          { value: 2, label: "Ojo de angel", header: "fabric" },
          { value: 3, label: "Dry Fit", header: "fabric" },
          { value: 4, label: "Micro durazno", header: "fabric" },
        ];

  const handleIconsVariation = () => {
    setChangeIcons(!changeIcons);
  };

  const handleInfoSelect = (value) => {
    setHandleContentInfoSelect(value);
    setHandleContentInfoInput(value);
  };

  const handleInfoInput = (e) => {
    const { name, value } = e.target;
    setHandleContentInfoInput({
      ...handleContentInfoInput,
      [name]: value,
    });
  };

  const handleSendFormulary = (e) => {
    e.preventDefault();
    const datosStorage = getItem(process.env.REACT_APP_NAME_ARTICLE) || "[]";
    setHandleContentInfoInput(datosStorage);
    console.log(datosStorage);
    setItem(process.env.REACT_APP_NAME_ARTICLE, {
      ...datosStorage,
      handleContentInfoInput,
    });

    handleNavigationMainView();
  };

  const handleChangeContainerRight = () => {
    setHandleContentInfoSelect({ header: "" });
  };

  const handleContainerChange = () => {
    setHandleContainerSubInside(!handleContainerSubInside);
  };

  const handleNavigationMainView = () => navigation("/");

  const cleanStorage = () => setItem(process.env.REACT_APP_NAME_ARTICLE, []);

  useEffect(() => {
    cleanStorage();
  }, []);

  return (
    <div className={style.container}>
      <Landing />

      <div
        className={
          handleContentInfoSelect.header
            ? stylesGlobal.containerRightVisible
            : stylesGlobal.containerMain
        }
      >
        <DropdownTop changeIcons={changeIcons} />
        <div className={style.containerTop}>
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
          {handleContainerSubInside && (
            <div className={style.containerSubInside}>
              <ContainerUploadImages
                handleContainerChange={handleContainerChange}
              />
            </div>
          )}
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
                      value={handleContentInfoSelect.Color}
                      onClick={handleChangeContainerRight}
                    />
                  </div>
                  <div className={style.select}>
                    <h3 className={style.header}>Cantidad de {article}</h3>
                    <Input
                      onChange={handleInfoInput}
                      name="Amount"
                      type="number"
                      placeholder="Cantidad aqui"
                      value={handleContentInfoSelect.Amount}
                      onClick={handleChangeContainerRight}
                    />
                  </div>
                </div>
              )}
              <div className={style.select}>
                <h3 className={style.header}>Informacion adicional</h3>
                <TextArea
                  onChange={handleInfoInput}
                  name="Information"
                  type="text"
                  placeholder="Escribir aqui"
                  value={handleContentInfoInput.Information}
                  onClick={handleChangeContainerRight}
                />
              </div>
            </form>
            <div className={style.containerButton}>
              <Button
                styleButton="Añadir"
                nameButton="Subir Imagenes"
                onClick={handleContainerChange}
              />

              <Button
                styleButton="Enviar"
                nameButton="Enviar"
                onClick={handleSendFormulary}
              />
            </div>
          </div>
        </div>
        <div className={background.zoombackground} />
      </div>
      {handleContentInfoSelect.label && (
        <div
          className={
            handleContentInfoSelect.header
              ? style.containerRight
              : style.containerRightHidden
          }
        >
          <ContainerRightPageOrder
            handleContentInfoSelect={handleContentInfoSelect}
          />
        </div>
      )}
    </div>
  );
}

export default OrderView;
