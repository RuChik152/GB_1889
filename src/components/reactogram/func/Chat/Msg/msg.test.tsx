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
    render(<Msg key={'1231231231'} author={'Имя Автора'} msg={'Какой то текст'} time={'10:10:10'} />);
  });

  it('with text', () => {
    render(<Msg key={'1231231231'} author={'Имя Автора'} msg={'Какой то текст'} time={'10:10:10'} />);
    expect(screen.getByText(/Имя Автора/i)).toBeInTheDocument();
    expect(screen.getByText(/Какой то текст/i)).toBeInTheDocument();
    expect(screen.getByText(/10:10:10/i)).toBeInTheDocument();
  });

  it('text on elements', () => {
    render(<Msg key={'1231231231'} author={'Имя Автора'} msg={'Какой то текст'} time={'10:10:10'} />);
    expect(screen.getByTestId('test-author').innerHTML).toBe('Имя Автора');
    expect(screen.getByTestId('test-text').innerHTML).toBe('Какой то текст');
    expect(screen.getByTestId('test-time').innerHTML).toBe('Время: 10:10:10');
  });

  it('Snapshot test', () => {
    const { asFragment } = render(<Msg key={'1231231231'} author={'Имя Автора'} msg={'Какой то текст'} time={'10:10:10'} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
