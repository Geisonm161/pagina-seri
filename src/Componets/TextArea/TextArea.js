import React from "react";
import style from "./TextArea.module.scss";

function Textarea({ name, placeholder, onChange, value }) {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={style.textArea}
      />
    </div>
  );
}
export default Textarea;
