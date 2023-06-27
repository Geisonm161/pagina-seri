import React from "react";
import style from "./Input.module.scss";

function Input({ value, onChange, name, type, placeholder, hidden, id, onClick }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={style.Input}
        onChange={onChange}
        name={name}
        hidden={hidden}
        onClick={onClick}
        id={id}
      />
    </div>
  );
}

export default Input;
