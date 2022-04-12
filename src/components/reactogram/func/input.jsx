import React, { useEffect, useRef } from 'react';

export const Input = (props) => {
  const inputEl = useRef(null);

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const action = () => {
    props.click();
  };

  return (
    <div className="text">
      <input
        className="text__input"
        value={props.text}
        onChange={props.change}
        type="text"
        placeholder="Ваше сообщение"
        name="msg"
        ref={inputEl}
      />
      <br />
      <button className="text__btn" onClick={action}>
        Отправить
      </button>
    </div>
  );
};
