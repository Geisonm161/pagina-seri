import style from "./Icons.module.scss";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineBook,
  AiOutlineForm,
  AiFillPicture,
  AiOutlineEnvironment,
  AiOutlineUser,
} from "react-icons/ai";

const Icons = ({ handleIconsVariation, changeIcons }) => {
  return (
    <div className={style.containerIcons}>
      {changeIcons ? (
        <AiOutlineClose
          className={style.iconsTopRight}
          onClick={handleIconsVariation}
        />
      ) : (
        <AiOutlineMenu
          className={style.iconsTopRight}
          onClick={handleIconsVariation}
        />
      )}
    </div>
  );
};

const IconsClose = () => <AiOutlineClose className={style.icons} />

const IconsInfo = () => <AiOutlineBook className={style.icons} />;

const IconsForm = () => <AiOutlineForm className={style.icons} />;

const IconsImage = () => <AiFillPicture className={style.icons} />;

const IconsLocation = () => <AiOutlineEnvironment className={style.icons} />;

const IconsUser = () => <AiOutlineUser className={style.icons} />;

export { Icons, IconsInfo, IconsForm, IconsImage, IconsLocation, IconsUser, IconsClose };
