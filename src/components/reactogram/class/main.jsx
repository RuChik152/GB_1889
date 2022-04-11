import React, { Component } from 'react';
import { Chat } from './chat';
import { Input } from './input';

export class Reactogram extends Component {
  state = {
    text: '',
    author: '',
    activate: true,
    time: '',
    msg: [],
  };

  componentDidMount() {
    this.setState({ author: this.props.data });
  }

  handelChange = (e) => {
    let tag = e.target;
    if (tag.className === 'text__input') {
      this.setState({ text: tag.value });
    }
    this.setState({ time: this.createCurrentTime() });
  };

  actionClick = () => {
    let obj = {
      msg: this.state.text,
      author: this.state.author,
      time: this.state.time,
    };
    this.setState({ msg: [...this.state.msg, obj] });
    this.setState({ activate: !this.state.activate });
  };

  createCurrentTime = () => {
    let time = new Date();
    return `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
  };

  updateState = (obj) => {
    this.setState({ msg: [...this.state.msg, obj] });
    this.setState({ time: '' });
    this.setState({ text: '' });
  };

  bot = () => {
    let lengthMsg = this.state.msg.length;
    if (lengthMsg === 0) {
      let obj = {
        msg: 'Привет, это бот психологической помощи Вася Вася. Вы можете использовать кодовые фразы для взаимодействия с ним =>  #Слово #Время #Поиск',
        author: 'BothFather',
        time: `${this.createCurrentTime()}`,
      };
      this.updateState(obj);
    } else if (this.state.text === '#Слово') {
      let obj = {
        msg: (
          <>
            <li>
              <a
                href="https://slovardalja.net/"
                target="_blank"
                rel="noreferrer"
              >
                Словарь Даля
              </a>
            </li>
            <li>
              <a
                href="https://stih.su/pushkin/"
                target="_blank"
                rel="noreferrer"
              >
                Стихи Пушкина
              </a>
            </li>
          </>
        ),
        author: 'BothFather',
        time: `${this.createCurrentTime()}`,
      };
      this.updateState(obj);
    } else if (this.state.text === '#Время') {
      let obj = {
        msg: (
          <>
            <li>
              <a href="https://time.is/ru/" target="_blank" rel="noreferrer">
                Time
              </a>
            </li>
            <li>
              <a href="https://time100.ru/" target="_blank" rel="noreferrer">
                Time 100
              </a>
            </li>
          </>
        ),
        author: 'BothFather',
        time: `${this.createCurrentTime()}`,
      };
      this.updateState(obj);
    } else if (this.state.text === '#Поиск') {
      let obj = {
        msg: (
          <>
            <li>
              <a href="https://ya.ru/" target="_blank" rel="noreferrer">
                Time
              </a>
            </li>
            <li>
              <a
                href="https://duckduckgo.com/"
                target="_blank"
                rel="noreferrer"
              >
                DuckDuckGo
              </a>
            </li>
            <li>
              <a
                href="https://www.dogpile.com/"
                target="_blank"
                rel="noreferrer"
              >
                DogPile
              </a>
            </li>
          </>
        ),
        author: 'BothFather',
        time: `${this.createCurrentTime()}`,
      };
      this.updateState(obj);
    } else {
      let name = this.state.msg.slice(-1);
      const msgBot = [
        'Сообщение от пользователя',
        'Message from user(англ.)',
        'Message de l\'utilisateur(франц.)',
        'Nachricht vom Benutzer(немц.)',
        '\n' + '用戶留言(кит.)',
      ];
      let template = '$wel__template$ $nik__name$.';
      let positionMsgBot = parseInt(Math.random() * msgBot.length);
      let regWel = /\$wel__template\$/gi;
      let newStr = template.replace(regWel, msgBot[positionMsgBot]);
      regWel = /\$nik__name\$/gi;
      newStr = newStr.replace(regWel, name[0].author);
      let obj = {
        msg: `${newStr}`,
        author: 'BothFather',
        time: `${this.createCurrentTime()}`,
      };
      this.updateState(obj);
    }
  };

  render() {
    return (
      <div className="home">
        <Chat
          message={this.state.msg}
          bot={this.bot}
          activate={this.state.activate}
        />
        <Input
          click={this.actionClick}
          text={this.state.text}
          author={this.state.author}
          change={this.handelChange}
        />
      </div>
    );
  }
}
