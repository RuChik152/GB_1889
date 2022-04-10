import React, { Component } from "react";

export class Input extends Component {

    action = () => {
        this.props.click();
    }

    render() {
        return  <div className = "text">
            <input className = "text__input" value={ this.props.text } onChange={ this.props.change } type = "text" placeholder="Ваше сообщение" name="msg"/>
            <br/>
            <input className = "text__name" value={ this.props.author } onChange={ this.props.change } type = "text" placeholder="Ваше имя" name="author"/>
            <br/>
            <button className = "text__btn" onClick={ this.action }>Отправить</button>
        </div>
    }

}