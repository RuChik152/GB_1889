import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Chat } from './chat';

const msg = [
  {
    author: 'admin',
    msg: 'Тестовое сообщение!',
    time: '10:10:10',
  },
  {
    author: 'admin2',
    msg: 'Тестовое сообщение!2',
    time: '10:10:10',
  },
];

const createArr = () => {
  const count = 10000;
  let arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      author: `user_name_id_${i}`,
      msg: `Текстовое сообщение номер №${i}`,
      time: `${i} : ${i} : ${i}`,
    });
  }
  return arr;
};

describe('Chat', () => {
  it('render component', () => {
    render(<Chat message={msg} />);
  });

  it('Snapshot test', () => {
    const { asFragment } = render(<Chat message={msg} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Send a large array of messages', () => {
    render(<Chat message={createArr()} />);
  });
});
