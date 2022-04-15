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
    render(<Msg item={data} />);
  });

  it('with text', () => {
    render(<Msg item={data} />);
    expect(screen.getByText(/[A-Za-z]/)).toBeInTheDocument();
  });

  it('text on elements', () => {
    render(<Msg item={data} />);
    expect(screen.getByTestId('test-author').innerHTML).toBe('admin');
    expect(screen.getByTestId('test-text').innerHTML).toBe(
      'Тестовое сообщение!'
    );
    expect(screen.getByTestId('test-time').innerHTML).toBe('Время: 10:10:10');
  });

  it('Snapshot test', () => {
    const { asFragment } = render(<Msg item={data} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
