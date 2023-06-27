import React from "react";
import style from "./TextArea.module.scss";

function Textarea({ name, placeholder, onChange, value, onClick }) {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style.textArea}
        onClick={onClick}
      />
    </div>
  );
}
export default Textarea;
