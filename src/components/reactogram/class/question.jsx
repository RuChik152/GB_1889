import React, { Component } from 'react';

export class Question extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__item">
          <p className="modal__text">Привет, прежде чем приступить к работе, укажи свое имя</p>
          <input
            type="text"
            value={this.props.author}
            onChange={this.props.change}
            className="modal__name"
          />
          <button className="modal__btn" onClick={this.props.quest} placeholder="Ваше имя">Отправить</button>
        </div>
      </div>
    );
  }
}
