import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NavChat } from './navChat';

const list = [
  {
    link: '#',
    title: 'test_name',
  },
  {
    link: '#',
    title: 'test_name',
  },
];

describe('NavChat', () => {
  it('Render', () => {
    render(<NavChat list={list} />);
  });

  it('Is element', () => {
    render(<NavChat list={list} />);
    const link = screen.getByTestId('chat_test-id');
    expect(link).toBeInTheDocument();
  })

  it('Snapshot', () => {
    const {asFragment} = render(<NavChat list={list} />);
    expect(asFragment()).toMatchSnapshot();
  })
});
