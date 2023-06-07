import React from 'react';
import style from './Input.module.scss';

function Input({value, onChange, name, type, placeholder}) {
  return (
    <div>
        <input type={type} placeholder={placeholder} value={value} className={style.Input} onChange={onChange} name={name}/>
    </div>
  )
}

export default Input;