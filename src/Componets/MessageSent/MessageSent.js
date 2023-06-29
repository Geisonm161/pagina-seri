import style from "./MessageSent.module.scss";
import { IconsMessage } from "../Icons/Icons";

function MessageSent({
  article,
  fabric,
  color,
  amount,
  information,
  imageFront,
  imageBack,
  imageAdditional,
  imageAdditional2,
}) {
  return (
    <div className={style.containerMessage}>
      <h1 className={style.headersMain}>
        {" "}
        <IconsMessage /> Enviado
      </h1>
      <br />

      <h4 className={style.headers}>Tipo de tela</h4>
      <li className={style.liContent}>{fabric}</li>

      <h4 className={style.headers}>Color de {article}</h4>
      <li className={style.liContent}>{color}</li>

      <h4 className={style.headers}>Cantidad de {article}</h4>
      <li className={style.liContent}>{amount}</li>

      <h4 className={style.headers}>Infomacion adicional Principal</h4>
      <li className={style.liContent}>{information}</li>

      <h4 className={style.headers}>Diseño delantero</h4>
      <li className={style.liContent}>{imageFront}</li>

      <h4 className={style.headers}>Diseño trasero</h4>
      <li className={style.liContent}>{imageBack}</li>

      <h4 className={style.headers}>Diseño adisional</h4>
      <li className={style.liContent}>{imageAdditional}</li>

      <h4 className={style.headers}>Diseño adicional 2</h4>
      <li className={style.liContent}>{imageAdditional2}</li>
    </div>
  );
}

export default MessageSent;
