import React, { useState } from "react";
import style from "./ContainerUploadImages.module.scss";
import Input from "../Input/Input";
import { AiOutlineCloudUpload } from "react-icons/ai";
import TextArea from "../TextArea/TextArea";
import Button from "../Button/Button";
import { setItem } from "../../services/servicesLocalStorage/servicesLocalStorage";
import { useParams } from "react-router-dom";

function ContainerUploadImages({ handleContainerChange }) {
  const { article } = useParams();

  const [handleCarrierImage, setHandleCarrierImage] = useState([]);
  const [handleInfoImage, setHandleInfoImage] = useState({ Article: article });

  const handleInfoInput = (e) => {
    const { name, files, value } = e.target;

    setHandleInfoImage({
      ...handleInfoImage,
      [name]: value,
    });

    if (files) {
      setHandleCarrierImage({
        ...handleCarrierImage,
        [name]: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleCloudImageFront = () => document.querySelector("#id").click();
  const handleCloudImageBack = () => document.querySelector("#id2").click();
  const handleCloudImageAdditional = () =>
    document.querySelector("#id3").click();
  const handleCloudImageAdditional2 = () =>
    document.querySelector("#id4").click();

  const handleAddFormulary = (e) => {
    e.preventDefault();
    setItem(process.env.REACT_APP_NAME_ARTICLE, handleInfoImage);
    handleContainerChange();
  };

  const handleCloseFormulary = () => handleContainerChange();

  return (
    <div className={style.containerMain}>
      <div className={style.containerPair}>
        <div className={style.container}>
          <header className={style.header}>Diseño delantero</header>
          <div
            className={style.containerInputImage}
            onClick={handleCloudImageFront}
          >
            <Input
              onChange={handleInfoInput}
              name="ImageFront"
              type="file"
              placeholder="imagen"
              id="id"
              hidden
            />
            {handleCarrierImage.ImageFront ? (
              <img
                src={handleCarrierImage.ImageFront}
                alt="preview"
                width={80}
              />
            ) : (
              <div className={style.containerIcon}>
                <AiOutlineCloudUpload className={style.iconCloud} />
                <p>Click para subir imagen</p>
              </div>
            )}
          </div>
        </div>

        <div className={style.container}>
          <header className={style.header}>Diseño trasero</header>
          <div
            className={style.containerInputImage}
            onClick={handleCloudImageBack}
          >
            <Input
              onChange={handleInfoInput}
              name="ImageBack"
              type="file"
              placeholder="imagen"
              id="id2"
              hidden
            />
            {handleCarrierImage.ImageBack ? (
              <img
                src={handleCarrierImage.ImageBack}
                alt="preview"
                width={80}
              />
            ) : (
              <div className={style.containerIcon}>
                <AiOutlineCloudUpload className={style.iconCloud} />
                <p>Click para subir imagen</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={style.containerPair}>
        <div className={style.container}>
          <header className={style.header}>Adicional</header>
          <div
            className={style.containerInputImage}
            onClick={handleCloudImageAdditional}
          >
            <Input
              onChange={handleInfoInput}
              name="ImageAdditional"
              type="file"
              placeholder="imagen"
              id="id3"
              hidden
            />
            {handleCarrierImage.ImageAdditional ? (
              <img
                src={handleCarrierImage.ImageAdditional}
                alt="preview"
                width={80}
              />
            ) : (
              <div className={style.containerIcon}>
                <AiOutlineCloudUpload className={style.iconCloud} />
                <p>Click para subir imagen</p>
              </div>
            )}
          </div>
        </div>

        <div className={style.container}>
          <header className={style.header}>Adicional</header>
          <div
            className={style.containerInputImage}
            onClick={handleCloudImageAdditional2}
          >
            <Input
              onChange={handleInfoInput}
              name="ImageAdditional2"
              type="file"
              placeholder="imagen"
              id="id4"
              hidden
            />
            {handleCarrierImage.ImageAdditional2 ? (
              <img
                src={handleCarrierImage.ImageAdditional2}
                alt="preview"
                width={80}
              />
            ) : (
              <div className={style.containerIcon}>
                <AiOutlineCloudUpload className={style.iconCloud} />
                <p>Click para subir imagen</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={style.select}>
        <h5 className={style.h5Header}>Informacion adicional</h5>
        <TextArea
          onChange={handleInfoInput}
          name="InformationAdditional"
          type="text"
          placeholder="Escribir aqui"
          value={handleInfoInput.InformationAdditional}
        />
      </div>
      <div className={style.containerButton}>
        <Button
          onClick={handleCloseFormulary}
          styleButton="Cerrar"
          nameButton="Cerrar"
        />

        <Button
          onClick={handleAddFormulary}
          styleButton="Añadir"
          nameButton="Añadir"
        />
      </div>
    </div>
  );
}

export default ContainerUploadImages;
