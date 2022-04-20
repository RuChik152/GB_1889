import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ChatArea } from './chatArea';



const msg = [
  {
    id: '11111',
    author: 'admin',
    msg: 'Тестовое сообщение!',
    time: '10:10:10',
  },
  {
    id: '22222',
    author: 'admin2',
    msg: 'Тестовое сообщение!2',
    time: '10:10:10',
  },
];

const createArr = () => {
  const count = 10000;
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      id: `00${i}`,
      author: `user_name_id_${i}`,
      msg: `Текстовое сообщение номер №${i}`,
      time: `${i} : ${i} : ${i}`,
    });
  }
  return arr;
};

describe('Chat', () => {
  it('render component', () => {
    render(<ChatArea msg={msg} />);
  });

  it('Snapshot test', () => {
    const { asFragment } = render(<ChatArea msg={msg} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Send a large array of messages', () => {
    render(<ChatArea msg={createArr()} />);
  });
});
