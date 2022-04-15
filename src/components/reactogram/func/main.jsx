import React, { useEffect, useState } from 'react';
import { Chat } from './Chat/chat';
import { Input } from './Input/input';

export const Reactogram = ({ data }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [msg, setMsg] = useState([]);

  useEffect(() => {
    setTimeout(bot, 1500);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (msg.length !== 0) {
      if (msg[msg.length - 1].author !== 'BothFather') {
        const timeout = setTimeout(bot, 1500);
        return () => {
          clearTimeout(timeout);
        };
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [msg]);

  const handelChange = (e) => {
    let tag = e.target;
    if (tag.className === 'text__input') {
      setText(tag.value);
    }
    setTime(createCurrentTime());
  };

  const actionClick = () => {
    let obj = { msg: text, author: data, time: time };
    setMsg([...msg, obj]);
  };

  const createCurrentTime = () => {
    let time = new Date();
    return `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`;
  };

  const bot = () => {
    let lengthMsg = msg.length;
    if (lengthMsg === 0) {
      let obj = {
        msg: 'Привет, это бот психологической помощи Вася Вася. Вы можете использовать кодовые фразы для взаимодействия с ним =>  #Слово #Время #Поиск',
        author: 'BothFather',
        time: `${createCurrentTime()}`,
      };
      setMsg([...msg, obj]);
      setTime('');
      setText('');
    }

    if (text === '#Слово') {
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
        time: `${createCurrentTime()}`,
      };
      setMsg([...msg, obj]);
      setTime('');
      setText('');
    } else if (text === '#Время') {
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
        time: `${createCurrentTime()}`,
      };
      setMsg([...msg, obj]);
      setTime('');
      setText('');
    } else if (text === '#Поиск') {
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
        time: `${createCurrentTime()}`,
      };
      setMsg([...msg, obj]);
      setTime('');
      setText('');
    } else {
      let name = msg.slice(-1);
      const msgBot = [
        'Сообщение от пользователя',
        'Message from user(англ.)',
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
        time: `${createCurrentTime()}`,
      };
      setMsg([...msg, obj]);
      setTime('');
      setText('');
    }
  };

  return (
    <div className="home" data-testid="home-test-id">
      <Chat message={msg} />
      <Input
        click={actionClick}
        text={text}
        author={data}
        change={handelChange}
      />
    </div>
  );
};
