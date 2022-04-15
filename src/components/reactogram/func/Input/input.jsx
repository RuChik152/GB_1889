import React from 'react';

export const Input = ({ text, change, click }) => {
  return (
    <div className="text">
      <input
        className="text__input"
        value={text}
        onChange={change}
        type="text"
        placeholder="Ваше сообщение"
        name="msg"
      />
      <br />
      <button className="text__btn" onClick={click} data-testid="test-id">
        Отправить
      </button>
    </div>
  );
};
