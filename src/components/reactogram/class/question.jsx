import React, { Component } from "react";

export class Question extends Component {

    render() {
        return <div className = "modal">
            <p>Привет, прежде чем приступить к работе, укажи свое имя</p>
            <input type = "text" value = { this.props.author } onChange = { this.props.change } className = "modal__name" />
            <button onClick = { this.props.quest }>Отправить</button>
        </div>
    }
}