import style from "./Icons.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlineForm } from "react-icons/ai";
import { AiFillPicture } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const Icons = ({ handleIconsVariation, changeIcons }) => {
  return (
    <div className={style.containerIcons}>
      {changeIcons ? (
        <AiOutlineClose
          className={style.iconsTopRight}
          onClick={handleIconsVariation}
        />
      ) : (
        <AiOutlineMenu className={style.iconsTopRight} onClick={handleIconsVariation} />
      )}
    </div>
  );
};

const IconsInfo = () => <AiOutlineBook className={style.icons} />;

const IconsForm = () => <AiOutlineForm className={style.icons} />;

const IconsImage = () => <AiFillPicture className={style.icons} />;

const IconsLocation = () => <AiOutlineEnvironment className={style.icons} />;

const IconsUser = () => <AiOutlineUser className={style.icons} />;

export { Icons, IconsInfo, IconsForm, IconsImage, IconsLocation, IconsUser };
