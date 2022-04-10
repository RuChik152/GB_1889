import React from "react";

export const Input = ( props ) => {

    const action = () => {
        props.click();
    }

    return <div className = "text">
        <input className = "text__input" value = { props.text } onChange = { props.change } type = "text" placeholder = "Ваше сообщение" name = "msg" />
        <br />
        <button className = "text__btn" onClick = { action }>Отправить</button>
    </div>

}