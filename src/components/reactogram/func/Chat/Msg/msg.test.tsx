import React from 'react';
import { render, screen } from '@testing-library/react';
import { Msg } from './msg';
import '@testing-library/jest-dom';

const data = {
  author: 'admin',
  msg: 'Тестовое сообщение!',
  time: '10:10:10',
};

describe('Msg', () => {
  it('render component', () => {
    render(<Msg author={'Имя Автора'} msg={'Какой то текст'} time={'10:10:10'} />);
  });

  it('with text', () => {
    render(<Msg author={'Имя Автора'} msg={'Какой то текст'} time={'10:10:10'} />);
    expect(screen.getByText(/Имя Автора/i)).toBeInTheDocument();
    expect(screen.getByText(/Какой то текст/i)).toBeInTheDocument();
    expect(screen.getByText(/10:10:10/i)).toBeInTheDocument();
  });



  it('Snapshot test', () => {
    const { asFragment } = render(<Msg author={'Имя Автора'} msg={'Какой то текст'} time={'10:10:10'} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
